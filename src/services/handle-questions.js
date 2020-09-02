export const setQuestion = function () {
    const questions = ["2 + 3", "3 + 4", "10 - 4", "8 - 3", "3 + 3"];
    const question = questions[parseInt(Math.random() * questions.length)];
    this.setState({
        question: question,
        options: [5, 6, 7, 8], // TODO
    });
};

export const onReply = function (response) {
    const { score, question } = this.state;
    response == eval(question)
        ? this.setState({ score: Math.min(parseInt(score) + 10, 100) + "%" })
        : this.setState({ score: parseInt(score) - 10 + "%" });
    this.setQuestion();
};
