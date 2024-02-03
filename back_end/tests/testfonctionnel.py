from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException

# Path to the ChromeDriver executable

# Create a new instance of the Chrome driver

chrome_path = '/Users/hh/Downloads/chromedriver-win64/chromedriver-win64/chromedriver.exe'

#  executable_path
chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument('--headless')  

chrome_service = webdriver.chrome.service.Service(chrome_path)
driver = webdriver.Chrome(service=chrome_service, options=chrome_options)
# Open the website
user_id = '427143c5-b'
url = f'http://localhost:3001/UserFirstPage/{user_id}'
driver.get(url)


 # Effectue une recherche
wait = WebDriverWait(driver, 20)  # Attendre jusqu'à 20 secondes

search_input = None 
try:
    search_input = wait.until(EC.presence_of_element_located((By.ID, 'searchbar')))
    search_input = wait.until(EC.element_to_be_clickable((By.ID, 'searchbar')))
    search_input.click()
except TimeoutException:
 print("Timed out waiting for search input.")
if search_input:
 search_input.send_keys("nehla")
 search_input.send_keys(Keys.RETURN)

elements = driver.find_elements(By.ID, 'myUniqueElement')
if len(elements) > 0:
    print("Search results found!")
    # Process the search results if needed
else:
    print("No search results found.")

# Close the browser window
driver.quit()