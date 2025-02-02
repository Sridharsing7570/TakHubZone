module.exports.firstController = async (req, res) => {
    try {
        return res.send(`<h2>This is heading</h2>`);
    } catch (error) {}
};
