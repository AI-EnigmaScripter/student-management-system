#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
class Student {
    name; // Student ka naam
    studentID; // Student ka unique ID
    coursesEnrolled; // Enrolled courses ka array
    balance; // Fees ka balance
    constructor(name) {
        this.name = name;
        this.studentID = this.generateStudentID(); // Unique ID generate karna
        this.coursesEnrolled = []; // Courses ka array initialize karna
        this.balance = 0; // Balance ko zero pe set karna
    }
    // Unique 5-digit student ID generate karne wala method
    generateStudentID() {
        return Math.random().toString(36).substr(2, 5).toUpperCase();
    }
    // Course enroll karne wala method
    enroll(course) {
        this.coursesEnrolled.push(course);
    }
    // Balance check karne wala method
    viewBalance() {
        return this.balance;
    }
    // Fees pay karne wala method
    payTuition(amount) {
        this.balance -= amount;
    }
    // Student ka status dikhane wala method
    showStatus() {
        console.log(chalk.yellow("Name:"), chalk.green(this.name));
        console.log(chalk.yellow("Student ID:"), chalk.green(this.studentID));
        console.log(chalk.yellow("Courses Enrolled:"), chalk.green(this.coursesEnrolled.join(', ')));
        console.log(chalk.yellow("Balance:"), chalk.green(this.balance.toString()));
    }
}
// Functiion made for student to write their name and course
async function createStudent() {
    const { name, course } = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: (chalk.blue('Enter your name:'))
        },
        {
            type: 'input',
            name: 'course',
            message: (chalk.blue('Enter the course you want to enroll in:'))
        }
    ]);
    const newStudent = new Student(name);
    newStudent.enroll(course);
    return newStudent;
}
// Main function
async function main() {
    const student = await createStudent();
    student.showStatus();
}
// Call the main function
main();
