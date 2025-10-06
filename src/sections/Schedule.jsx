import React from 'react'

const Schedule = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 py-20">
  <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree bg-clip-text text-transparent">
    Weekly Schedule — SSC 11th & 12th
  </h2>
  <p className="text-gray-600 text-center max-w-2xl mb-12">
    Compare weekly plans for both tracks side by side.
  </p>

  <div className="w-full max-w-6xl overflow-x-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200">
    <table className="min-w-full text-gray-800">
      <thead className="bg-gray-50 border-b border-gray-200">
        <tr>
          <th className="py-4 px-6 text-left font-semibold">Dates</th>
          <th className="py-4 px-6 text-left font-semibold">Track 1 — SSC 11th</th>
          <th className="py-4 px-6 text-left font-semibold">Track 2 — SSC 12th</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 text-sm md:text-base">
        <tr className="hover:bg-gradient-to-r hover:from-brandColorOne/10 hover:via-brandColorTwo/10 hover:to-brandColorThree/10 transition">
          <td className="py-4 px-6">Aug 18–23</td>
          <td className="py-4 px-6">Trigonometry — Compound Angles</td>
          <td className="py-4 px-6">Quadratic Equations</td>
        </tr>
        <tr className="hover:bg-gradient-to-r hover:from-brandColorOne/10 hover:via-brandColorTwo/10 hover:to-brandColorThree/10 transition">
          <td className="py-4 px-6">Aug 25–30</td>
          <td className="py-4 px-6">Trigonometry — up to Transformations</td>
          <td className="py-4 px-6">Sequence & Series</td>
        </tr>
        <tr className="hover:bg-gradient-to-r hover:from-brandColorOne/10 hover:via-brandColorTwo/10 hover:to-brandColorThree/10 transition">
          <td className="py-4 px-6">Sep 1–6</td>
          <td className="py-4 px-6">Trigonometry — Equations & Inverse Functions</td>
          <td className="py-4 px-6">Circles</td>
        </tr>
        <tr className="hover:bg-gradient-to-r hover:from-brandColorOne/10 hover:via-brandColorTwo/10 hover:to-brandColorThree/10 transition">
          <td className="py-4 px-6">Sep 8–13</td>
          <td className="py-4 px-6">Sets — Relations</td>
          <td className="py-4 px-6">Permutations & Combinations — Part 1</td>
        </tr>
        <tr className="hover:bg-gradient-to-r hover:from-brandColorOne/10 hover:via-brandColorTwo/10 hover:to-brandColorThree/10 transition">
          <td className="py-4 px-6">Sep 15–20</td>
          <td className="py-4 px-6">Functions — Domain & Range</td>
          <td className="py-4 px-6">Permutations & Combinations — Part 2</td>
        </tr>
        <tr className="hover:bg-gradient-to-r hover:from-brandColorOne/10 hover:via-brandColorTwo/10 hover:to-brandColorThree/10 transition">
          <td className="py-4 px-6">Sep 22–27</td>
          <td className="py-4 px-6">Functions — One-One, Onto, Periodic</td>
          <td className="py-4 px-6">Probability — Part 1</td>
        </tr>
        <tr className="hover:bg-gradient-to-r hover:from-brandColorOne/10 hover:via-brandColorTwo/10 hover:to-brandColorThree/10 transition">
          <td className="py-4 px-6">Sep 29–Oct 4</td>
          <td className="py-4 px-6">Functions — Composite & Inverse</td>
          <td className="py-4 px-6">Probability — Part 2</td>
        </tr>
        <tr className="hover:bg-gradient-to-r hover:from-brandColorOne/10 hover:via-brandColorTwo/10 hover:to-brandColorThree/10 transition">
          <td className="py-4 px-6">Oct 6–11</td>
          <td className="py-4 px-6">Functions — Miscellaneous</td>
          <td className="py-4 px-6">Indefinite Integrals — Part 1</td>
        </tr>
        <tr className="hover:bg-gradient-to-r hover:from-brandColorOne/10 hover:via-brandColorTwo/10 hover:to-brandColorThree/10 transition">
          <td className="py-4 px-6">Oct 13–18</td>
          <td className="py-4 px-6">Matrices — Basics & Operations</td>
          <td className="py-4 px-6">Indefinite Integrals — Part 2</td>
        </tr>
        <tr className="hover:bg-gradient-to-r hover:from-brandColorOne/10 hover:via-brandColorTwo/10 hover:to-brandColorThree/10 transition">
          <td className="py-4 px-6">Oct 20–25</td>
          <td className="py-4 px-6">Determinants — Properties & Applications</td>
          <td className="py-4 px-6">Definite Integrals — Part 1</td>
        </tr>
        <tr className="hover:bg-gradient-to-r hover:from-brandColorOne/10 hover:via-brandColorTwo/10 hover:to-brandColorThree/10 transition">
          <td className="py-4 px-6">Oct 27–Nov 1</td>
          <td className="py-4 px-6">Locus, Transformation of Axes</td>
          <td className="py-4 px-6">Definite Integrals — Part 2</td>
        </tr>
        <tr className="hover:bg-gradient-to-r hover:from-brandColorOne/10 hover:via-brandColorTwo/10 hover:to-brandColorThree/10 transition">
          <td className="py-4 px-6">Nov 3–8</td>
          <td className="py-4 px-6">Straight Line — Basic Forms</td>
          <td className="py-4 px-6">Area Under the Curve</td>
        </tr>
        <tr className="hover:bg-gradient-to-r hover:from-brandColorOne/10 hover:via-brandColorTwo/10 hover:to-brandColorThree/10 transition">
          <td className="py-4 px-6">Nov 10–15</td>
          <td className="py-4 px-6">Straight Line — Part 2</td>
          <td className="py-4 px-6">Differential Equations</td>
        </tr>
        <tr className="hover:bg-gradient-to-r hover:from-brandColorOne/10 hover:via-brandColorTwo/10 hover:to-brandColorThree/10 transition">
          <td className="py-4 px-6">Nov 17–22</td>
          <td className="py-4 px-6">Limits — Standard Limits & Techniques</td>
          <td className="py-4 px-6">Conics — Parabola</td>
        </tr>
        <tr className="hover:bg-gradient-to-r hover:from-brandColorOne/10 hover:via-brandColorTwo/10 hover:to-brandColorThree/10 transition">
          <td className="py-4 px-6">Nov 24–29</td>
          <td className="py-4 px-6">Continuity & Differentiability</td>
          <td className="py-4 px-6">Conics — Ellipse & Hyperbola</td>
        </tr>
        <tr className="hover:bg-gradient-to-r hover:from-brandColorOne/10 hover:via-brandColorTwo/10 hover:to-brandColorThree/10 transition">
          <td className="py-4 px-6">Dec 1–6</td>
          <td className="py-4 px-6">Differentiation — Basics & Formulas</td>
          <td className="py-4 px-6">Complex Numbers</td>
        </tr>
        <tr className="hover:bg-gradient-to-r hover:from-brandColorOne/10 hover:via-brandColorTwo/10 hover:to-brandColorThree/10 transition">
          <td className="py-4 px-6">Dec 8–13</td>
          <td className="py-4 px-6">Differentiation — Advanced Techniques</td>
          <td className="py-4 px-6">Revision</td>
        </tr>
        <tr className="hover:bg-gradient-to-r hover:from-brandColorOne/10 hover:via-brandColorTwo/10 hover:to-brandColorThree/10 transition">
          <td className="py-4 px-6">Dec 15–20</td>
          <td className="py-4 px-6">Applications of Derivatives — Increasing/Decreasing</td>
          <td className="py-4 px-6">Revision</td>
        </tr>
        <tr className="hover:bg-gradient-to-r hover:from-brandColorOne/10 hover:via-brandColorTwo/10 hover:to-brandColorThree/10 transition">
          <td className="py-4 px-6">Dec 22–27</td>
          <td className="py-4 px-6">Applications of Derivatives — Maxima & Minima</td>
          <td className="py-4 px-6">Revision</td>
        </tr>
        <tr className="hover:bg-gradient-to-r hover:from-brandColorOne/10 hover:via-brandColorTwo/10 hover:to-brandColorThree/10 transition">
          <td className="py-4 px-6">Dec 29–Jan 3</td>
          <td className="py-4 px-6">Vectors — Basics & Operations</td>
          <td className="py-4 px-6">Revision</td>
        </tr>
        <tr className="hover:bg-gradient-to-r hover:from-brandColorOne/10 hover:via-brandColorTwo/10 hover:to-brandColorThree/10 transition">
          <td className="py-4 px-6">Jan 5–10</td>
          <td className="py-4 px-6">Vectors — Scalar & Vector Product</td>
          <td className="py-4 px-6">Revision</td>
        </tr>
        <tr className="hover:bg-gradient-to-r hover:from-brandColorOne/10 hover:via-brandColorTwo/10 hover:to-brandColorThree/10 transition">
          <td className="py-4 px-6">Jan 12–17</td>
          <td className="py-4 px-6">3D Geometry — Introduction</td>
          <td className="py-4 px-6">Revision</td>
        </tr>
        <tr className="hover:bg-gradient-to-r hover:from-brandColorOne/10 hover:via-brandColorTwo/10 hover:to-brandColorThree/10 transition">
          <td className="py-4 px-6">Jan 19–24</td>
          <td className="py-4 px-6">3D Geometry — Lines</td>
          <td className="py-4 px-6">Revision</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

  )
}

export default Schedule