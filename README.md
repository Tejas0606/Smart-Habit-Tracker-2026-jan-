# Smart-Habit-Tracker-2026-jan-
-Project Overview:

The Smart Task & Habit Tracker is a fully functional, interactive DOM-based web application built using HTML, CSS, and Vanilla JavaScript. The application helps users manage daily tasks and build consistent habits through meaningful user interactions, dynamic UI updates, and client-side state management — all without using any frontend frameworks.


-Problem Statement:

Many students and working professionals struggle to organize their daily tasks and maintain habits consistently. This project aims to solve this problem by providing a simple, browser-based application that allows users to track tasks and habits efficiently while preserving their progress using LocalStorage.


-Features Implemented:

1.Task Management:

-Add new tasks with priority levels

-Mark tasks as completed or active

-Delete tasks

-Filter tasks by:
                 All
                 Active
                 Completed
                 
-Real-time task statistics (total & completed)


2.Habit Tracking:

-Add daily habits

-Mark habits as completed for the day

-Automatic daily habit reset

-Habit streak tracking



3.Data Persistence:

-Uses LocalStorage to save tasks and habits

-Data remains intact even after page refresh



-DOM & JavaScript Concepts Used:

Dynamic DOM element creation (createElement, appendChild)


DOM updates based on user interactions


Event handling:

-Form submission events

-Click events

-Change events

-Conditional rendering using JavaScript

-Event-driven UI updates

-Client-side state management using arrays and objects

-LocalStorage (getItem, setItem)

-Class manipulation for dynamic styling





-UI / UX Highlights:

Clean and minimal interface

Logical user flow

Clear visual feedback for actions

Responsive layout for different screen sizes

UI designed with functionality as the top priority

-Technologies Used:

HTML5

CSS3

Vanilla JavaScript (ES6+)

Browser APIs (LocalStorage)


-How to Run the Project:

1.The application loads previously saved tasks and habits from LocalStorage, if available.

2.Users can add a new task by entering a task name, selecting its priority, and submitting the task form.

3.Added tasks are displayed dynamically on the page using JavaScript DOM manipulation.

4.Tasks can be marked as completed or active by clicking on them, and can also be deleted.

5.Filter buttons allow users to view all, active, or completed tasks without reloading the page.

6.Users can add daily habits using the habit input form.

7.Habits can be marked as completed for the current day, and the application updates the habit streak accordingly.

8.All changes are saved automatically in LocalStorage, ensuring data persistence even after refreshing or reopening the browser.

9.Task statistics (total tasks and completed tasks) are updated in real time based on user interactions.


-Known Limitations:

1.Data is stored locally in the browser only

2.No user authentication

3.Habits are tracked on a daily basis (not weekly/monthly)
