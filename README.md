![App picture](https://github.com/margiki/NHS-nodejs-webapp/blob/master/github_readme_photos/main_picture.jpg)

# Description :point_left:
It's a web application for managing hospitals rooms and determining the patient's priority for isolation. The app provides a centralised hub for managing the patients and planning their distribution across hospital’s rooms. 

It allows nurses to keep track of the patients and their diseases in real time and to have an overview over the patients and rooms, and better manage the rooms assignment across patients.

# Live demo :rocket:
https://nhs-app.herokuapp.com/
* username: admin
* password: admin

# Prerequisites
- [x] Node.js 6.9.1 or later - install from https://nodejs.org/

# Installing - easy :electric_plug:
1.	Download the repository
```
git clone https://github.com/margiki/NHS-nodejs-webapp
```
2.	Open the Terminal (Linux & MacOS) or PowerShell (Windows) and change directory to the project folder.
3.	Type ‘npm install’ in the Terminal (PowerShell) and press Enter. All the dependencies would be installed.
4.	Go back to the Terminal (PowerShell) and be sure that you are pointing inside the project folder. To open the application, type ‘node app.js’ and press Enter.
5.	The application should be live on the local port 3000.  
6.	Type http://localhost:3000/ into a browser.
7.	To login use the username: admin  and the password: admin
8.	Now you should be inside the application

# How to use it :book:
### Dashboard

Data about patients and rooms is available here. The page is split into three tables. 

![Dashboard](https://github.com/margiki/NHS-nodejs-webapp/blob/master/github_readme_photos/dashboard.jpg)

![Dashboard](https://github.com/margiki/NHS-nodejs-webapp/blob/master/github_readme_photos/dasboard_2.jpg)

To clear the red warning sign you need to go on the patient’s personal page. To do that, you have to double click on his name. By clicking on the ‘Update button’ on the bottom of the page, the patient’s diagnosis in updated for the next 24 hours (consequently, the red warning sign disappears).

### Add patient page

You can add a new patient in the system with his personal details and his diseases. The application automatically computes the score of the patient based on the entered diseases

![Add patient page](https://github.com/margiki/NHS-nodejs-webapp/blob/master/github_readme_photos/add_new_patient.jpg)

### Patient page

Double click on a patient name on the dashboard to get here.
![Patient page](https://github.com/margiki/NHS-nodejs-webapp/blob/master/github_readme_photos/patient_page.jpg)

### System settings

The control center of the application. It allows users to manage the diseases & rooms of the Hospital and create new accounts

![System Settings](https://github.com/margiki/NHS-nodejs-webapp/blob/master/github_readme_photos/system_settings.jpg)

