/*********************************************************************************
* WEB700 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Jiyad Mohammed Arif Shaikh Student ID: 149307233 Date: 05/06/2025
*
********************************************************************************/
const collegeData = require('./modules/collegeData.js');

collegeData.initialize().then(() => {
        return collegeData.getAllStudents();}).then((students) => {
        console.log(`Successfully retrieved ${students.length} students`);
        return collegeData.getCourses();}).then((courses) => {
        console.log(`Successfully retrieved ${courses.length} courses`);
        return collegeData.getTAs();}).then((TAs) => {
        console.log(`Successfully retrieved ${TAs.length} TAs`);}).catch((err) => {
        console.log(err);});
