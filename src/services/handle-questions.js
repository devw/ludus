export const setQuestion = function () {
    const question = getQuestion();
    this.setState({
        question: question,
        options: getOptions(question),
    });
};

export const onReply = function (response) {
    const { score, question } = this.state;
    Number(response) === eval(question)
        ? this.setState({ score: Math.min(parseInt(score) + 5, 100) + "%" })
        : this.setState({ score: Math.max(parseInt(score) - 5, 0) + "%" });
    this.setQuestion();
};

const getQuestion = () => {
    const operator = rand(2) > 0 ? "+" : "-";
    return `${rand(100)} ${operator} ${rand(10)}`;
};

const getOptions = (question) => {
    const result = eval(question);
    const shift = rand(4) - 3;
    return [...new Array(4)].map((e, i) => result + i + shift);
};

const rand = (num) => parseInt(Math.random() * num);
