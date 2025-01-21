import prisma from "../prisma";
export const getTasks = async (req, res) => {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
};
export const createTask = async (req, res) => {
    const { title, color } = req.body;
    const task = await prisma.task.create({ data: { title, color } });
    res.status(201).json(task);
};
export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, color, completed } = req.body;
    const task = await prisma.task.update({
        where: { id: Number(id) },
        data: { title, color, completed },
    });
    res.json(task);
};
export const deleteTask = async (req, res) => {
    const { id } = req.params;
    await prisma.task.delete({ where: { id: Number(id) } });
    res.status(204).send();
};
