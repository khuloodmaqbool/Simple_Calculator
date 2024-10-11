import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { TbDivide } from "react-icons/tb";
import { FaMinus } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const SimpleCalculator = () => {
    const [num1, setNum1] = useState<string>("");
    const [num2, setNum2] = useState<string>("");
    const [result, setResult] = useState<number | string>(0);

    const handleOperatorBtn = (operator: string) => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        if (!isNaN(number1) && !isNaN(number2)) {
            switch (operator) {
                case "add":
                    setResult(number1 + number2);
                    break;
                case "minus":
                    setResult(number1 - number2);
                    break;
                case "multiply":
                    setResult(number1 * number2);
                    break;
                case "divide":
                    if (number2 === 0) {
                        setResult("Cannot divide by zero");
                    } else {
                        setResult(number1 / number2);
                    }
                    break;
                default:
                    setResult("Invalid operation");
            }
        } else {
            setResult("Invalid numbers");
        }
    };

    const handleClearBtn = () => {
        setNum1("");
        setNum2("");
        setResult(0);
    };

    const operatorBtnStyles = ` text-white p-5 m-3`;

    return (
        <div className="p-5 w-4/5 md:w-96 lg:w-96 bg-white shadow-lg rounded-xl">
            <h1 className="text-3xl mb-4">Simple Calculator</h1>
            <Input
                className="w-full shadow-lg border-0 py-6"
                type="text"
                placeholder="First number"
                value={num1}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNum1(event.target.value)}
            />
            <Input
                className="w-full my-3 shadow-lg border-0 py-6"
                type="text"
                placeholder="Second number"
                value={num2}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNum2(event.target.value)}
            />
            <div className="flex justify-between items-center">
                <Button className={`${operatorBtnStyles} bg-lime-400`} onClick={() => handleOperatorBtn("add")}>
                    <FiPlus />
                </Button>
                <Button className={`${operatorBtnStyles} bg-rose-600`} onClick={() => handleOperatorBtn("minus")}>
                    <FaMinus />
                </Button>
                <Button className={`${operatorBtnStyles} bg-yellow-300`} onClick={() => handleOperatorBtn("multiply")}>
                    <RxCross2 />
                </Button>
                <Button className={`${operatorBtnStyles} bg-sky-400`} onClick={() => handleOperatorBtn("divide")}>
                    <TbDivide />
                </Button>
            </div>
            <p className="text-3xl mt-5 w-full text-center shadow-lg my-2 rounded-lg mb-5 bg-sky-400 text-white py-1">{result}</p>
            <Button className="bg-black text-white p-3 w-full" onClick={handleClearBtn}>
                Clear All
            </Button>
        </div>
    );
};
