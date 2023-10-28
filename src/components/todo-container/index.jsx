import React from "react";
import Todo from '../todo/index'

export default function TodoContainer() {
    return (
        <main className="flex flex-col items-center">
            <div className="flex flex-col space-y-2 h-96 pt-14">
                <div>
                    <a href="#" className="underline hover:text-xl">
                        Add new
                    </a>
                </div>
                <div className="w-96 min-h-full border border-black rounded-lg p-3">
                    <Todo />
                </div>
            </div>
            
            
        </main>
    ) 
}
