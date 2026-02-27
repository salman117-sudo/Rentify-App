import React from "react";
import { categories } from "../../../data/index";

export default function Categories() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
         
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-gray-100 rounded-2xl h-56 flex flex-col items-center justify-center text-center
                           transition-all duration-300 hover:bg-slate-200 hover:scale-105 cursor-pointer"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-xl mb-6">
                  <Icon size={28} className="text-blue-400" />
                </div>

                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm">{item.count}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
