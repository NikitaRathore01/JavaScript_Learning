let tasks = [
    {
        id: 1,
        title: "Learn Node.js",
        description: "Complete Node.js fundamentals",
        status: "pending"
    },
    {
        id: 2,
        title: "Practice JavaScript",
        description: "Solve JavaScript exercises",
        status: "completed"
    },
    {
        id: 3,
        title: "Build Task Manager",
        description: "Create CRUD operations",
        status: "pending"
    }
];

export function createTask(id, title, description, status) {
    const task = {
        id,
        title,
        description,
        status
    };

    tasks.push(task);
    return task;
}

export function getAllTasks() {
    return tasks;
}

export function getTaskById(id) {
    return tasks.find(task => task.id === id);
}

export function updateTask(id, title, description, status) {
    const task = tasks.find(task => task.id === id);

    if (!task) {
        return null;
    }

    if (title !== "") {
        task.title = title;
    }

    if (description !== "") {
        task.description = description;
    }

    if (status !== "") {
        task.status = status;
    }

    return task;
}

export function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);

    if (index === -1) {
        return null;
    }

    const deletedTask = tasks[index];

    tasks.splice(index, 1);

    return deletedTask;
}

export function getTasksByStatus(status) {
    return tasks.filter(
        task => task.status.toLowerCase() === status.toLowerCase()
    );
}