import React, { Component } from 'react'

export default class Page extends Component {

    render() {
        const array = [1, 2, [10, 12], { name: "appscrip" },
            ["javascript", "typescript"], "python", [123, 212, [343, 444, 555, [999, 888, 7777], ["code"]], { location: "Bengaluru" }, [160062]], 3, 4];

        // const iterateObject = (item) => {
        //     return Object.keys(item).map((key) => {
        //         const value = item[key];
        //         return (
        //             <div>
        //                 <span>{typeof value}: {value}</span>
        //             </div>
        //         )
        //     })
        // }
        let count = 0;
        const res = (arr) => {

            return arr.map((item) => {
                if (typeof item === "object") {
                    if (Array.isArray(item)) {
                        return res(item);
                    }
                    else {
                        return Object.keys(item).map((key) => {
                            const value = item[key];
                            return (
                                <div>
                                    <span>{++count}.</span>
                                    <span>{(typeof value).charAt(0).toUpperCase() + (typeof value).slice(1)}: {value}</span>
                                </div>
                            )
                        })
                    }
                }
                else {
                    if (typeof item === "string") {
                        return (
                            <div>
                                <span>{++count}.</span>
                                <span>{(typeof item).charAt(0).toUpperCase() + (typeof item).slice(1)}: {item}</span>
                            </div>
                        )
                    }
                    return (
                        <div>
                            <span>{++count}.</span>
                            <span>{(typeof item).charAt(0).toUpperCase() + (typeof item).slice(1)}: {item}</span>
                        </div>

                    )
                }
            })
        }

        return (
            <div>{res(array)}</div>
        )
    }
}
