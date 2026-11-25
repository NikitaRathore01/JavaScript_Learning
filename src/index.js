import readline from "readline";
import {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
    getTasksByStatus
} from "./taskManager.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log("\n===== TASK MANAGER =====");
    console.log("1. Create Task");
    console.log("2. Get All Tasks");
    console.log("3. Get Task By ID");
    console.log("4. Update Task");
    console.log("5. Delete Task");
    console.log("6. Get Tasks By Status");
    console.log("7. Exit");

    rl.question("\nEnter your choice: ", (choice) => {
        switch (choice) {

            case "1":
                rl.question("Enter Task ID: ", (id) => {
                    rl.question("Enter Title: ", (title) => {
                        rl.question("Enter Description: ", (description) => {
                            rl.question("Enter Status (pending/completed): ", (status) => {

                                const task = createTask(
                                    Number(id),
                                    title,
                                    description,
                                    status
                                );

                                console.log("\nTask Created:");
                                console.log(task);

                                showMenu();
                            });
                        });
                    });
                });
                break;

            case "2":
                console.log("\nAll Tasks:");
                console.log(getAllTasks());
                showMenu();
                break;

            case "3":
                rl.question("Enter Task ID: ", (id) => {
                    const task = getTaskById(Number(id));

                    if (task) {
                        console.log(task);
                    } else {
                        console.log("Task not found");
                    }

                    showMenu();
                });
                break;

            case "4":
                rl.question("Enter Task ID to Update: ", (id) => {
                    rl.question("Enter New Title: ", (title) => {
                        rl.question("Enter New Description: ", (description) => {
                            rl.question("Enter New Status: ", (status) => {

                                const updatedTask = updateTask(
                                    Number(id),
                                    title,
                                    description,
                                    status
                                );

                                if (updatedTask) {
                                    console.log("Task Updated:");
                                    console.log(updatedTask);
                                } else {
                                    console.log("Task not found");
                                }

                                showMenu();
                            });
                        });
                    });
                });
                break;

            case "5":
                rl.question("Enter Task ID to Delete: ", (id) => {

                    const deletedTask = deleteTask(Number(id));

                    if (deletedTask) {
                        console.log("Task Deleted:");
                        console.log(deletedTask);
                    } else {
                        console.log("Task not found");
                    }

                    showMenu();
                });
                break;

            case "6":
                rl.question(
                    "Enter Status (pending/completed): ",
                    (status) => {

                        const tasks = getTasksByStatus(status);

                        console.log("\nMatching Tasks:");
                        console.log(tasks);

                        showMenu();
                    }
                );
                break;

            case "7":
                console.log("Exiting Task Manager...");
                rl.close();
                break;

            default:
                console.log("Invalid Choice");
                showMenu();
        }
    });
}

showMenu();