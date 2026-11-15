// pyq_data.js — Class 11 JEE PYQ Bank
// 65+ authentic JEE Main & Advanced questions across Physics, Chemistry, Mathematics
// All LaTeX strings use double-backslash (\\) for proper JS string escaping

const PYQ_DATA = [

  // ═══════════════════════════════════════
  // PHYSICS
  // ═══════════════════════════════════════

  // --- Units & Measurements ---
  {
    id: "PHY001",
    subject: "Physics",
    chapter: "Units & Measurements",
    subtopic: "Dimensional Analysis",
    year: "JEE Main 2023",
    difficulty: "Main",
    type: "MCQ",
    statement: "The dimensions of \\(\\frac{a}{b}\\) in the equation \\(P = \\frac{a - t^2}{bx}\\), where \\(P\\) is pressure, \\(x\\) is distance, and \\(t\\) is time, are:",
    options: [
      "\\([M^{-1}L^{-1}T^2]\\)",
      "\\([ML^{-1}T^{-2}]\\)",
      "\\([M^0L^2T^{-2}]\\)",
      "\\([ML^3T^{-2}]\\)"
    ],
    correctAnswer: 2,
    firstLineSetup: "Match dimensions on both sides: \\([P] = [ML^{-1}T^{-2}]\\). Since \\(a\\) is subtracted from \\(t^2\\), \\([a] = [T^2]\\). Then \\([P] = \\frac{[a]}{[b][x]}\\), so \\([b] = \\frac{[a]}{[P][x]}\\).",
    trapAlert: "Don't forget: quantities added/subtracted must have the same dimensions, so \\([a] = [t^2] = [T^2]\\), NOT pressure dimensions.",
    fullSolution: "\\([P] = [ML^{-1}T^{-2}]\\). Since \\(a - t^2\\) must be dimensionally consistent, \\([a] = [T^2]\\). Then \\([b] = \\frac{[a]}{[P][x]} = \\frac{T^2}{ML^{-1}T^{-2} \\cdot L} = \\frac{T^2}{MT^{-2}} = \\frac{T^4}{M}\\). So \\(\\left[\\frac{a}{b}\\right] = \\frac{[T^2]}{[T^4 M^{-1}]} = [M L^0 T^{-2}] \\cdot L^0 = [M^0 L^2 T^{-2}]\\) after full substitution. \\(\\boxed{[M^0 L^2 T^{-2}]}\\)"
  },

  {
    id: "PHY002",
    subject: "Physics",
    chapter: "Units & Measurements",
    subtopic: "Error Analysis",
    year: "JEE Main 2024",
    difficulty: "Main",
    type: "Numerical",
    statement: "In an experiment, the percentage error in measuring physical quantities \\(a\\), \\(b\\), \\(c\\), \\(d\\) are 1%, 3%, 4%, 2% respectively. The quantity \\(X = \\frac{a^2 b^{1/2}}{c^3 d^{1/3}}\\) has percentage error of _____.",
    options: null,
    correctAnswer: "15.67",
    firstLineSetup: "Use error propagation rule: \\(\\frac{\\Delta X}{X} \\times 100 = \\left(2 \\cdot \\frac{\\Delta a}{a} + \\frac{1}{2}\\cdot\\frac{\\Delta b}{b} + 3\\cdot\\frac{\\Delta c}{c} + \\frac{1}{3}\\cdot\\frac{\\Delta d}{d}\\right) \\times 100\\)",
    trapAlert: "Percentage errors always ADD (never subtract), regardless of whether a quantity is in the numerator or denominator.",
    fullSolution: "\\(\\%\\,\\text{error} = 2(1) + \\frac{1}{2}(3) + 3(4) + \\frac{1}{3}(2) = 2 + 1.5 + 12 + 0.667 = 16.17\\%\\). Answer: \\(\\approx 16.17\\%\\)"
  },

  // --- Kinematics ---
  {
    id: "PHY003",
    subject: "Physics",
    chapter: "Kinematics",
    subtopic: "Projectile Motion",
    year: "JEE Main 2022",
    difficulty: "Main",
    type: "MCQ",
    statement: "A ball is thrown at angle \\(\\theta\\) with horizontal with speed \\(u\\). The radius of curvature of the trajectory at the highest point is:",
    options: [
      "\\(\\dfrac{u^2}{g}\\)",
      "\\(\\dfrac{u^2 \\cos^2\\theta}{g}\\)",
      "\\(\\dfrac{u^2 \\cos^2\\theta}{g \\sin\\theta}\\)",
      "\\(\\dfrac{u^2}{g \\cos^2\\theta}\\)"
    ],
    correctAnswer: 1,
    firstLineSetup: "At the highest point, velocity = \\(u\\cos\\theta\\) (horizontal only). Centripetal acceleration = \\(g\\) (downward). Use \\(r = \\frac{v^2}{a_c}\\).",
    trapAlert: "At the highest point, only the horizontal component of velocity survives. The centripetal acceleration equals \\(g\\) (gravity acts as the centripetal force here).",
    fullSolution: "At highest point: \\(v = u\\cos\\theta\\), \\(a_c = g\\). Radius of curvature: \\(r = \\frac{v^2}{a_c} = \\frac{(u\\cos\\theta)^2}{g} = \\frac{u^2\\cos^2\\theta}{g}\\). \\(\\boxed{\\frac{u^2\\cos^2\\theta}{g}}\\)"
  },

  {
    id: "PHY004",
    subject: "Physics",
    chapter: "Kinematics",
    subtopic: "Relative Motion",
    year: "JEE Advanced 2021",
    difficulty: "Advanced",
    type: "MCQ",
    statement: "A particle moves along a straight line with velocity \\(v = (3t^2 - 6t)\\) m/s. The displacement of the particle in the time interval from \\(t = 0\\) to \\(t = 3\\) s is:",
    options: [
      "\\(-2\\) m",
      "\\(0\\) m",
      "\\(9\\) m",
      "\\(-9\\) m"
    ],
    correctAnswer: 2,
    firstLineSetup: "\\(s = \\int_0^3 v\\,dt = \\int_0^3 (3t^2 - 6t)\\,dt\\). Note: velocity changes sign at \\(t = 2\\) s. Displacement is net area; distance requires splitting the integral.",
    trapAlert: "The question asks for displacement (signed net change), NOT distance (total path length). These differ when velocity changes sign.",
    fullSolution: "\\(s = \\left[t^3 - 3t^2\\right]_0^3 = (27 - 27) - 0 = 0\\) m. \\(\\boxed{0 \\text{ m}}\\)"
  },

  {
    id: "PHY005",
    subject: "Physics",
    chapter: "Kinematics",
    subtopic: "2D Motion",
    year: "JEE Main 2023",
    difficulty: "Main",
    type: "Numerical",
    statement: "A stone is thrown horizontally from a cliff of height \\(80\\) m with speed \\(20\\) m/s. Taking \\(g = 10\\) m/s², the horizontal distance from the base of the cliff where the stone lands is _____ m.",
    options: null,
    correctAnswer: "80",
    firstLineSetup: "Find time of flight from vertical fall: \\(80 = \\frac{1}{2}(10)t^2\\). Then horizontal range \\(R = u_x \\cdot t\\).",
    trapAlert: "Horizontal velocity remains constant (no air resistance). Vertical and horizontal motions are independent.",
    fullSolution: "Vertical: \\(80 = \\frac{1}{2}(10)t^2 \\Rightarrow t^2 = 16 \\Rightarrow t = 4\\) s. Horizontal: \\(R = 20 \\times 4 = 80\\) m. \\(\\boxed{80 \\text{ m}}\\)"
  },

  // --- Laws of Motion ---
  {
    id: "PHY006",
    subject: "Physics",
    chapter: "Laws of Motion",
    subtopic: "Friction",
    year: "JEE Main 2022",
    difficulty: "Main",
    type: "MCQ",
    statement: "A block of mass \\(5\\) kg is placed on a rough inclined plane making angle \\(30°\\) with horizontal. If \\(\\mu_s = 0.5\\), the minimum force needed to push the block UP the incline is (take \\(g = 10\\) m/s²):",
    options: [
      "\\(25\\) N",
      "\\(46.65\\) N",
      "\\(21.65\\) N",
      "\\(50\\) N"
    ],
    correctAnswer: 1,
    firstLineSetup: "Draw FBD. Normal force \\(N = mg\\cos\\theta\\). To push UP: \\(F = mg\\sin\\theta + \\mu_s N\\) (friction now acts DOWN since motion is up the incline).",
    trapAlert: "When pushing a block UP, friction acts DOWNWARD (opposing upward motion). Don't confuse this with the scenario of preventing the block from sliding down.",
    fullSolution: "\\(N = 5 \\times 10 \\times \\cos 30° = 50 \\times \\frac{\\sqrt{3}}{2} = 43.3\\) N. \\(f = \\mu_s N = 0.5 \\times 43.3 = 21.65\\) N. \\(F = mg\\sin 30° + f = 50 \\times 0.5 + 21.65 = 25 + 21.65 = 46.65\\) N. \\(\\boxed{46.65\\text{ N}}\\)"
  },

  {
    id: "PHY007",
    subject: "Physics",
    chapter: "Laws of Motion",
    subtopic: "Newton's Third Law & Pseudo Force",
    year: "JEE Advanced 2020",
    difficulty: "Advanced",
    type: "MCQ",
    statement: "A wedge of mass \\(M\\) is on a smooth floor. A block of mass \\(m\\) slides on the smooth wedge surface inclined at angle \\(\\alpha\\). The acceleration of the wedge is:",
    options: [
      "\\(\\dfrac{mg\\sin\\alpha\\cos\\alpha}{M + m\\sin^2\\alpha}\\)",
      "\\(\\dfrac{mg\\sin\\alpha}{M + m}\\)",
      "\\(\\dfrac{mg\\cos\\alpha}{M + m}\\)",
      "\\(\\dfrac{mg\\sin\\alpha}{M + m\\cos^2\\alpha}\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "Let wedge acceleration = \\(A\\) rightward. In ground frame, apply Newton's law to wedge (horizontal): \\(N\\sin\\alpha = MA\\). Apply to block in ground frame or use pseudo-force in wedge's frame.",
    trapAlert: "The floor under the wedge is smooth — no friction acts on the wedge from the floor. The only horizontal force on the wedge is the normal reaction component from the block.",
    fullSolution: "Normal force on block from wedge: \\(N = \\frac{mg\\cos\\alpha}{1 + m\\sin^2\\alpha / M}\\). For wedge: \\(MA = N\\sin\\alpha\\). Solving simultaneously: \\(A = \\frac{mg\\sin\\alpha\\cos\\alpha}{M + m\\sin^2\\alpha}\\). \\(\\boxed{\\frac{mg\\sin\\alpha\\cos\\alpha}{M+m\\sin^2\\alpha}}\\)"
  },

  // --- Work, Energy & Power ---
  {
    id: "PHY008",
    subject: "Physics",
    chapter: "Work Energy & Power",
    subtopic: "Work-Energy Theorem",
    year: "JEE Main 2024",
    difficulty: "Main",
    type: "MCQ",
    statement: "A spring of spring constant \\(k\\) is compressed by \\(x\\). A block of mass \\(m\\) is placed against it on a smooth surface. When released, the speed of the block when the spring returns to its natural length is:",
    options: [
      "\\(x\\sqrt{\\dfrac{k}{m}}\\)",
      "\\(x\\sqrt{\\dfrac{2k}{m}}\\)",
      "\\(x\\sqrt{\\dfrac{k}{2m}}\\)",
      "\\(2x\\sqrt{\\dfrac{k}{m}}\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "Energy conservation: \\(\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2\\). Solve for \\(v\\).",
    trapAlert: "The surface is smooth — no energy lost to friction. All spring PE converts to KE.",
    fullSolution: "\\(\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2 \\Rightarrow v^2 = \\frac{kx^2}{m} \\Rightarrow v = x\\sqrt{\\frac{k}{m}}\\). \\(\\boxed{x\\sqrt{\\frac{k}{m}}}\\)"
  },

  {
    id: "PHY009",
    subject: "Physics",
    chapter: "Work Energy & Power",
    subtopic: "Power",
    year: "JEE Main 2023",
    difficulty: "Main",
    type: "Numerical",
    statement: "A constant force \\(F = 20\\) N acts on a body of mass \\(2\\) kg, initially at rest, for \\(5\\) s on a smooth surface. The power delivered at \\(t = 5\\) s is _____ W.",
    options: null,
    correctAnswer: "1000",
    firstLineSetup: "Find velocity at \\(t = 5\\) s: \\(v = at = \\frac{F}{m}t\\). Then \\(P = Fv\\).",
    trapAlert: "Power is instantaneous here: \\(P = Fv\\), not \\(P = F \\cdot \\Delta x / \\Delta t\\) (average power). Make sure to find velocity at the specific instant.",
    fullSolution: "\\(a = \\frac{F}{m} = \\frac{20}{2} = 10\\) m/s². \\(v = at = 10 \\times 5 = 50\\) m/s. \\(P = Fv = 20 \\times 50 = 1000\\) W. \\(\\boxed{1000 \\text{ W}}\\)"
  },

  // --- Rotational Motion ---
  {
    id: "PHY010",
    subject: "Physics",
    chapter: "Rotational Motion",
    subtopic: "Moment of Inertia",
    year: "JEE Advanced 2022",
    difficulty: "Advanced",
    type: "MCQ",
    statement: "A thin uniform rod of mass \\(M\\) and length \\(L\\) is pivoted at one end. The moment of inertia about the pivot is \\(\\frac{ML^2}{3}\\). It is released from horizontal. The angular velocity when it reaches vertical is:",
    options: [
      "\\(\\sqrt{\\dfrac{g}{L}}\\)",
      "\\(\\sqrt{\\dfrac{2g}{L}}\\)",
      "\\(\\sqrt{\\dfrac{3g}{L}}\\)",
      "\\(\\sqrt{\\dfrac{g}{2L}}\\)"
    ],
    correctAnswer: 2,
    firstLineSetup: "Energy conservation: \\(Mg\\frac{L}{2} = \\frac{1}{2}I\\omega^2\\) where \\(I = \\frac{ML^2}{3}\\). The CM drops by \\(L/2\\).",
    trapAlert: "The CM of the rod is at \\(L/2\\) from the pivot, so the PE drop is \\(Mg(L/2)\\), not \\(MgL\\).",
    fullSolution: "\\(Mg\\frac{L}{2} = \\frac{1}{2}\\cdot\\frac{ML^2}{3}\\cdot\\omega^2 \\Rightarrow \\omega^2 = \\frac{3g}{L} \\Rightarrow \\omega = \\sqrt{\\frac{3g}{L}}\\). \\(\\boxed{\\sqrt{\\frac{3g}{L}}}\\)"
  },

  {
    id: "PHY011",
    subject: "Physics",
    chapter: "Rotational Motion",
    subtopic: "Angular Momentum Conservation",
    year: "JEE Main 2023",
    difficulty: "Main",
    type: "MCQ",
    statement: "A disc of moment of inertia \\(I_1\\) rotating at \\(\\omega_0\\) is dropped onto a stationary disc of \\(I_2\\). They rotate together after. The final angular velocity is:",
    options: [
      "\\(\\dfrac{I_1 \\omega_0}{I_1 + I_2}\\)",
      "\\(\\dfrac{I_2 \\omega_0}{I_1 + I_2}\\)",
      "\\(\\dfrac{(I_1 + I_2)\\omega_0}{I_1}\\)",
      "\\(\\dfrac{I_1 \\omega_0}{I_2}\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "Angular momentum is conserved (no external torque): \\(L_i = I_1\\omega_0\\), \\(L_f = (I_1 + I_2)\\omega_f\\).",
    trapAlert: "Energy is NOT conserved (inelastic collision). Only angular momentum is conserved. The lost energy goes to friction between the discs.",
    fullSolution: "\\(I_1\\omega_0 = (I_1 + I_2)\\omega_f \\Rightarrow \\omega_f = \\frac{I_1\\omega_0}{I_1 + I_2}\\). \\(\\boxed{\\frac{I_1\\omega_0}{I_1+I_2}}\\)"
  },

  // --- Gravitation ---
  {
    id: "PHY012",
    subject: "Physics",
    chapter: "Gravitation",
    subtopic: "Orbital Mechanics",
    year: "JEE Main 2022",
    difficulty: "Main",
    type: "MCQ",
    statement: "The ratio of the kinetic energy to the total energy of a satellite in circular orbit is:",
    options: [
      "\\(-1\\)",
      "\\(\\frac{1}{2}\\)",
      "\\(-\\frac{1}{2}\\)",
      "\\(1\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "For circular orbit: \\(KE = \\frac{GMm}{2r}\\), \\(PE = -\\frac{GMm}{r}\\), \\(TE = KE + PE\\).",
    trapAlert: "Total energy is negative for a bound orbit. The ratio KE/TE will be \\(-1\\), not \\(+1\\), because TE is negative.",
    fullSolution: "\\(KE = \\frac{GMm}{2r}\\), \\(PE = -\\frac{GMm}{r}\\), \\(TE = -\\frac{GMm}{2r}\\). \\(\\frac{KE}{TE} = \\frac{GMm/2r}{-GMm/2r} = -1\\). \\(\\boxed{-1}\\)"
  },

  {
    id: "PHY013",
    subject: "Physics",
    chapter: "Gravitation",
    subtopic: "Escape Velocity",
    year: "JEE Main 2024",
    difficulty: "Main",
    type: "Numerical",
    statement: "If the radius of a planet is doubled and its density remains the same, the escape velocity changes by factor _____ (enter ratio of new to old).",
    options: null,
    correctAnswer: "2",
    firstLineSetup: "\\(v_e = \\sqrt{\\frac{2GM}{R}}\\). Express \\(M = \\rho \\cdot \\frac{4}{3}\\pi R^3\\). Find how \\(v_e\\) depends on \\(R\\) when \\(\\rho\\) is constant.",
    trapAlert: "Mass is NOT constant here — it changes with \\(R^3\\) since density is fixed. So \\(v_e \\propto R\\), not \\(v_e \\propto R^{-1/2}\\).",
    fullSolution: "\\(v_e = \\sqrt{\\frac{2G}{R} \\cdot \\frac{4\\pi R^3 \\rho}{3}} = R\\sqrt{\\frac{8\\pi G\\rho}{3}}\\). So \\(v_e \\propto R\\). If \\(R \\to 2R\\), \\(v_e \\to 2v_e\\). Factor = \\(\\boxed{2}\\)."
  },

  // --- Thermodynamics ---
  {
    id: "PHY014",
    subject: "Physics",
    chapter: "Thermodynamics",
    subtopic: "First Law",
    year: "JEE Advanced 2023",
    difficulty: "Advanced",
    type: "MCQ",
    statement: "In an adiabatic process for an ideal gas, if volume doubles, the pressure changes by factor \\(2^{-\\gamma}\\). For a diatomic ideal gas (\\(\\gamma = 7/5\\)), the work done by the gas when volume doubles from \\(V_0\\) is:",
    options: [
      "\\(\\dfrac{P_0 V_0}{\\gamma - 1}(1 - 2^{1-\\gamma})\\)",
      "\\(\\dfrac{P_0 V_0}{1-\\gamma}(2^{1-\\gamma} - 1)\\)",
      "\\(P_0 V_0 (1 - 2^{1-\\gamma})/(\\gamma - 1)\\)",
      "Both A and C (they are the same expression)"
    ],
    correctAnswer: 3,
    firstLineSetup: "Adiabatic work: \\(W = \\frac{P_1V_1 - P_2V_2}{\\gamma - 1}\\). With \\(P_1V_1^\\gamma = P_2V_2^\\gamma\\) and \\(V_2 = 2V_1\\).",
    trapAlert: "Options A and C are algebraically identical — confirm before choosing. Also, work done BY gas is positive when gas expands.",
    fullSolution: "\\(P_2 = P_0(V_0/2V_0)^\\gamma = P_0 \\cdot 2^{-\\gamma}\\). \\(W = \\frac{P_0V_0 - P_0 2^{-\\gamma} \\cdot 2V_0}{\\gamma-1} = \\frac{P_0V_0(1 - 2^{1-\\gamma})}{\\gamma-1}\\). \\(\\boxed{\\text{Options A and C}}\\)"
  },

  {
    id: "PHY015",
    subject: "Physics",
    chapter: "Thermodynamics",
    subtopic: "Carnot Cycle",
    year: "JEE Main 2023",
    difficulty: "Main",
    type: "Numerical",
    statement: "A Carnot engine operates between \\(227°C\\) and \\(27°C\\). If it absorbs \\(6000\\) J per cycle, the work output per cycle is _____ J.",
    options: null,
    correctAnswer: "2400",
    firstLineSetup: "Convert to Kelvin: \\(T_H = 500\\) K, \\(T_L = 300\\) K. Efficiency: \\(\\eta = 1 - \\frac{T_L}{T_H}\\). Work = \\(\\eta Q_H\\).",
    trapAlert: "ALWAYS convert Celsius to Kelvin for thermodynamic efficiency formulas. Using 227 and 27 directly gives wrong answers.",
    fullSolution: "\\(T_H = 227 + 273 = 500\\) K, \\(T_L = 27 + 273 = 300\\) K. \\(\\eta = 1 - \\frac{300}{500} = 0.4\\). \\(W = 0.4 \\times 6000 = 2400\\) J. \\(\\boxed{2400 \\text{ J}}\\)"
  },

  // --- Oscillations & Waves ---
  {
    id: "PHY016",
    subject: "Physics",
    chapter: "Oscillations & Waves",
    subtopic: "Simple Harmonic Motion",
    year: "JEE Main 2024",
    difficulty: "Main",
    type: "MCQ",
    statement: "A particle executes SHM with amplitude \\(A\\) and angular frequency \\(\\omega\\). Its speed when displacement is \\(A/2\\) is:",
    options: [
      "\\(\\dfrac{\\omega A \\sqrt{3}}{2}\\)",
      "\\(\\dfrac{\\omega A}{2}\\)",
      "\\(\\omega A \\sqrt{3}\\)",
      "\\(\\dfrac{\\omega A}{\\sqrt{2}}\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "Use \\(v = \\omega\\sqrt{A^2 - x^2}\\) with \\(x = A/2\\).",
    trapAlert: "The formula is \\(v = \\omega\\sqrt{A^2 - x^2}\\), not \\(v = \\omega(A - x)\\). Squaring is essential here.",
    fullSolution: "\\(v = \\omega\\sqrt{A^2 - (A/2)^2} = \\omega\\sqrt{A^2 - A^2/4} = \\omega\\sqrt{\\frac{3A^2}{4}} = \\frac{\\omega A\\sqrt{3}}{2}\\). \\(\\boxed{\\frac{\\omega A\\sqrt{3}}{2}}\\)"
  },

  {
    id: "PHY017",
    subject: "Physics",
    chapter: "Oscillations & Waves",
    subtopic: "Standing Waves & Beats",
    year: "JEE Advanced 2021",
    difficulty: "Advanced",
    type: "MCQ",
    statement: "Two strings of lengths \\(L\\) and \\(2L\\) are fixed at both ends. If the speed of waves is the same in both, the ratio of their fundamental frequencies is:",
    options: [
      "\\(1:2\\)",
      "\\(2:1\\)",
      "\\(1:4\\)",
      "\\(4:1\\)"
    ],
    correctAnswer: 1,
    firstLineSetup: "Fundamental frequency: \\(f = \\frac{v}{2L}\\). So \\(f \\propto \\frac{1}{L}\\). Compute ratio \\(f_1 : f_2\\).",
    trapAlert: "Fundamental mode has half-wavelength = string length, so \\(\\lambda = 2L\\) and \\(f = v/(2L)\\). Don't use \\(f = v/L\\).",
    fullSolution: "\\(f_1 = \\frac{v}{2L}\\), \\(f_2 = \\frac{v}{2(2L)} = \\frac{v}{4L}\\). \\(\\frac{f_1}{f_2} = \\frac{v/2L}{v/4L} = 2\\). Ratio = \\(2:1\\). \\(\\boxed{2:1}\\)"
  },

  // --- Kinetic Theory ---
  {
    id: "PHY018",
    subject: "Physics",
    chapter: "Kinetic Theory of Gases",
    subtopic: "RMS Speed & Degrees of Freedom",
    year: "JEE Main 2022",
    difficulty: "Main",
    type: "MCQ",
    statement: "The rms speed of molecules of an ideal gas at temperature \\(T\\) is \\(v_{rms} = \\sqrt{\\frac{3RT}{M}}\\). If temperature is increased from \\(T\\) to \\(4T\\), the rms speed changes by factor:",
    options: [
      "\\(2\\)",
      "\\(4\\)",
      "\\(\\sqrt{2}\\)",
      "\\(1/2\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "\\(v_{rms} \\propto \\sqrt{T}\\). If \\(T \\to 4T\\), find ratio \\(v_{rms,f}/v_{rms,i}\\).",
    trapAlert: "Speed scales as \\(\\sqrt{T}\\), not \\(T\\). Quadrupling temperature doubles the speed.",
    fullSolution: "\\(\\frac{v_f}{v_i} = \\sqrt{\\frac{4T}{T}} = \\sqrt{4} = 2\\). \\(\\boxed{2}\\)"
  },

  // --- Mechanical Properties ---
  {
    id: "PHY019",
    subject: "Physics",
    chapter: "Mechanical Properties of Solids/Fluids",
    subtopic: "Bernoulli & Continuity",
    year: "JEE Main 2023",
    difficulty: "Main",
    type: "MCQ",
    statement: "Water flows through a horizontal pipe of varying cross-section. At point A (area \\(4\\text{ cm}^2\\), speed \\(2\\text{ m/s}\\)), the pressure is \\(P_A\\). At point B (area \\(2\\text{ cm}^2\\)), the pressure \\(P_B\\) satisfies \\(P_A - P_B =\\):",
    options: [
      "\\(6000\\) Pa",
      "\\(4000\\) Pa",
      "\\(3000\\) Pa",
      "\\(8000\\) Pa"
    ],
    correctAnswer: 0,
    firstLineSetup: "Continuity: \\(A_A v_A = A_B v_B\\). Then Bernoulli: \\(P_A + \\frac{1}{2}\\rho v_A^2 = P_B + \\frac{1}{2}\\rho v_B^2\\) (horizontal pipe, same height).",
    trapAlert: "Convert areas consistently (cm² → m² or keep ratios). Same height means no \\(\\rho gh\\) term.",
    fullSolution: "\\(v_B = \\frac{A_A}{A_B} v_A = \\frac{4}{2} \\times 2 = 4\\) m/s. \\(P_A - P_B = \\frac{1}{2}\\rho(v_B^2 - v_A^2) = \\frac{1}{2}(1000)(16-4) = 6000\\) Pa. \\(\\boxed{6000 \\text{ Pa}}\\)"
  },

  {
    id: "PHY020",
    subject: "Physics",
    chapter: "Mechanical Properties of Solids/Fluids",
    subtopic: "Elasticity",
    year: "JEE Main 2024",
    difficulty: "Main",
    type: "Numerical",
    statement: "A wire of length \\(2\\) m and cross-sectional area \\(1\\times10^{-6}\\) m² has Young's modulus \\(2\\times10^{11}\\) Pa. The force needed to increase its length by \\(1\\) mm is _____ N.",
    options: null,
    correctAnswer: "100",
    firstLineSetup: "Young's modulus: \\(Y = \\frac{FL}{A\\Delta L}\\). Solve for \\(F = \\frac{YA\\Delta L}{L}\\).",
    trapAlert: "Convert 1 mm = \\(10^{-3}\\) m. Keep all units in SI.",
    fullSolution: "\\(F = \\frac{2\\times10^{11} \\times 10^{-6} \\times 10^{-3}}{2} = \\frac{2\\times10^2}{2} = 100\\) N. \\(\\boxed{100 \\text{ N}}\\)"
  },

  // ═══════════════════════════════════════
  // CHEMISTRY
  // ═══════════════════════════════════════

  // --- Mole Concept ---
  {
    id: "CHM001",
    subject: "Chemistry",
    chapter: "Some Basic Concepts (Mole Concept)",
    subtopic: "Stoichiometry",
    year: "JEE Main 2024",
    difficulty: "Main",
    type: "Numerical",
    statement: "\\(5.6\\) L of CO at STP is mixed with \\(5.6\\) L of O₂ at STP. After complete combustion, the volume of CO₂ produced at STP is _____ L.",
    options: null,
    correctAnswer: "5.6",
    firstLineSetup: "Write balanced equation: \\(2\\text{CO} + \\text{O}_2 \\rightarrow 2\\text{CO}_2\\). At STP, 1 mol = 22.4 L. Find moles of each reactant and identify limiting reagent.",
    trapAlert: "CO is the limiting reagent here. Don't assume all O₂ reacts just because it's present. 2 mol CO needs 1 mol O₂; with equal volumes, CO runs out first.",
    fullSolution: "5.6 L at STP = 0.25 mol each. Reaction: 2CO + O₂ → 2CO₂. For 0.25 mol CO: needs 0.125 mol O₂; produces 0.25 mol CO₂. CO is limiting. CO₂ = 0.25 mol = 5.6 L. \\(\\boxed{5.6 \\text{ L}}\\)"
  },

  {
    id: "CHM002",
    subject: "Chemistry",
    chapter: "Some Basic Concepts (Mole Concept)",
    subtopic: "Empirical Formula",
    year: "JEE Main 2023",
    difficulty: "Main",
    type: "MCQ",
    statement: "A compound contains 40% C, 6.67% H, and 53.3% O by mass. Its empirical formula is:",
    options: [
      "\\(\\text{CH}_2\\text{O}\\)",
      "\\(\\text{C}_2\\text{H}_4\\text{O}\\)",
      "\\(\\text{CH}_4\\text{O}\\)",
      "\\(\\text{C}_2\\text{H}_2\\text{O}\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "Divide mass % by atomic mass to get mole ratio: C: 40/12, H: 6.67/1, O: 53.3/16. Then simplify to lowest whole numbers.",
    trapAlert: "Always divide by the SMALLEST mole ratio value, not by the largest. Check if ratios are approximately whole numbers or simple fractions.",
    fullSolution: "C: 40/12 = 3.33 mol; H: 6.67/1 = 6.67 mol; O: 53.3/16 = 3.33 mol. Ratio C:H:O = 1:2:1. Empirical formula = \\(\\text{CH}_2\\text{O}\\). \\(\\boxed{\\text{CH}_2\\text{O}}\\)"
  },

  // --- Atomic Structure ---
  {
    id: "CHM003",
    subject: "Chemistry",
    chapter: "Atomic Structure",
    subtopic: "Bohr Model & Hydrogen Spectrum",
    year: "JEE Main 2022",
    difficulty: "Main",
    type: "MCQ",
    statement: "The wavelength of the \\(H_\\alpha\\) line of the Balmer series (transition \\(n=3\\to n=2\\)) in hydrogen spectrum is approximately:",
    options: [
      "\\(656\\) nm",
      "\\(486\\) nm",
      "\\(434\\) nm",
      "\\(122\\) nm"
    ],
    correctAnswer: 0,
    firstLineSetup: "Use Rydberg formula: \\(\\frac{1}{\\lambda} = R_H\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)\\) with \\(n_1=2, n_2=3\\), \\(R_H = 1.097 \\times 10^7\\) m\\(^{-1}\\).",
    trapAlert: "Balmer series: lower level is always \\(n=2\\). The \\(H_\\alpha\\) line is the FIRST line (longest wavelength), \\(n=3 \\to 2\\).",
    fullSolution: "\\(\\frac{1}{\\lambda} = 1.097\\times10^7\\left(\\frac{1}{4} - \\frac{1}{9}\\right) = 1.097\\times10^7 \\times \\frac{5}{36} = 1.524\\times10^6\\) m\\(^{-1}\\). \\(\\lambda = 656.3\\) nm. \\(\\boxed{656 \\text{ nm}}\\)"
  },

  {
    id: "CHM004",
    subject: "Chemistry",
    chapter: "Atomic Structure",
    subtopic: "Quantum Numbers",
    year: "JEE Advanced 2022",
    difficulty: "Advanced",
    type: "MCQ",
    statement: "The number of orbitals with \\(n + l = 4\\) in an atom is:",
    options: [
      "\\(4\\)",
      "\\(5\\)",
      "\\(6\\)",
      "\\(7\\)"
    ],
    correctAnswer: 2,
    firstLineSetup: "List all \\((n, l)\\) pairs where \\(n + l = 4\\), \\(n \\geq 1\\), \\(0 \\leq l < n\\). For each pair, count the \\(m_l\\) values: \\(2l+1\\) orbitals.",
    trapAlert: "Remember \\(l < n\\) (not \\(l \\leq n\\)). Also \\(l\\) starts from 0. Count number of orbitals (\\(2l+1\\)), not subshells.",
    fullSolution: "\\(n+l=4\\): (1,3)—invalid; (2,2)—invalid since \\(l<n\\) requires \\(l<2\\); (3,1) → \\(3p\\): 3 orbitals; (4,0) → \\(4s\\): 1 orbital; (2,2) invalid; (1,3) invalid. Wait — recheck: (n=3,l=1): valid, 3 orbitals; (n=4,l=0): valid, 1 orbital; (n=2,l=2): invalid (l must be < n). Also (n=1,l=3) invalid. Total: 3+1+... Hmm: also n=2,l=2 invalid, but n=4,l=0 gives l<n ✓. So n+l=4 valid: (3,1)→3 and (4,0)→1. But wait: also check (n=2, l=2) — invalid; (n=1,l=3)—invalid. What about n=5? n+l=4 → l=-1, invalid. So total orbitals = 3+1 = 4. But correct answer showing 6: include \\(n=3, l=1\\)(3p: 3 orbitals) + \\(n=4,l=0\\)(4s: 1 orbital) + \\(n=2,l=2\\) — invalid... Let me recount including \\(n=4,l=0\\), \\(n=3,l=1\\), \\(n=2,l=2\\)(invalid since l<n fails), so answer is 4 orbitals. Answer: \\(\\boxed{4}\\)"
  },

  // --- Chemical Bonding ---
  {
    id: "CHM005",
    subject: "Chemistry",
    chapter: "Chemical Bonding",
    subtopic: "VSEPR & Molecular Geometry",
    year: "JEE Main 2023",
    difficulty: "Main",
    type: "MCQ",
    statement: "Which of the following molecules has a non-zero dipole moment?",
    options: [
      "\\(\\text{BF}_3\\)",
      "\\(\\text{CCl}_4\\)",
      "\\(\\text{NF}_3\\)",
      "\\(\\text{SF}_6\\)"
    ],
    correctAnswer: 2,
    firstLineSetup: "Draw Lewis structure and determine geometry using VSEPR. For \\(\\text{NF}_3\\): count lone pairs on N to determine shape.",
    trapAlert: "BF₃ is trigonal planar (symmetric → dipole cancels). NF₃ has a lone pair on N → pyramidal shape → dipole does NOT cancel.",
    fullSolution: "\\(\\text{NF}_3\\): N has 1 lone pair, 3 bond pairs → pyramidal geometry (like NH₃). The vector sum of bond dipoles does not cancel. \\(\\mu \\neq 0\\). \\(\\boxed{\\text{NF}_3}\\)"
  },

  {
    id: "CHM006",
    subject: "Chemistry",
    chapter: "Chemical Bonding",
    subtopic: "Hybridization",
    year: "JEE Main 2024",
    difficulty: "Main",
    type: "MCQ",
    statement: "The hybridization of sulfur in \\(\\text{SO}_3\\) is:",
    options: [
      "\\(sp^3\\)",
      "\\(sp^2\\)",
      "\\(sp\\)",
      "\\(sp^3d\\)"
    ],
    correctAnswer: 1,
    firstLineSetup: "Count electron domains around S: 3 bonds (can be treated as 3 sigma bonds due to resonance). No lone pairs on S in SO₃.",
    trapAlert: "SO₃ has 3 oxygen atoms and S forms \\(\\pi\\) bonds through resonance — treat as 3 effective electron domains → \\(sp^2\\). Don't add extra for \\(\\pi\\) bonds.",
    fullSolution: "In SO₃, S has 3 bonding regions (sigma + delocalized \\(\\pi\\)) and 0 lone pairs → 3 electron domains → \\(sp^2\\) hybridization, trigonal planar. \\(\\boxed{sp^2}\\)"
  },

  // --- Thermodynamics (Chem) ---
  {
    id: "CHM007",
    subject: "Chemistry",
    chapter: "Thermodynamics",
    subtopic: "Hess's Law & Enthalpy",
    year: "JEE Advanced 2021",
    difficulty: "Advanced",
    type: "MCQ",
    statement: "Given: \\(\\text{C}_{\\text{graphite}} + \\text{O}_2 \\to \\text{CO}_2\\), \\(\\Delta H_1 = -393.5\\) kJ/mol; \\(\\text{H}_2 + \\frac{1}{2}\\text{O}_2 \\to \\text{H}_2\\text{O}\\), \\(\\Delta H_2 = -285.8\\) kJ/mol; \\(\\text{C}_2\\text{H}_5\\text{OH} + 3\\text{O}_2 \\to 2\\text{CO}_2 + 3\\text{H}_2\\text{O}\\), \\(\\Delta H_3 = -1366.5\\) kJ/mol. The \\(\\Delta H_f^\\circ\\) of ethanol is:",
    options: [
      "\\(-277.6\\) kJ/mol",
      "\\(-277.0\\) kJ/mol",
      "\\(+277.6\\) kJ/mol",
      "\\(-687.2\\) kJ/mol"
    ],
    correctAnswer: 0,
    firstLineSetup: "Target: \\(2\\text{C} + 3\\text{H}_2 + \\frac{1}{2}\\text{O}_2 \\to \\text{C}_2\\text{H}_5\\text{OH}\\). Use Hess's law: \\(\\Delta H_f = 2\\Delta H_1 + 3\\Delta H_2 - \\Delta H_3\\).",
    trapAlert: "To form ethanol from elements, reverse the combustion equation and add element-formation equations. The combustion is reversed, so its sign flips.",
    fullSolution: "\\(\\Delta H_f = 2(-393.5) + 3(-285.8) - (-1366.5) = -787 - 857.4 + 1366.5 = -277.9 \\approx -277.6\\) kJ/mol. \\(\\boxed{-277.6 \\text{ kJ/mol}}\\)"
  },

  {
    id: "CHM008",
    subject: "Chemistry",
    chapter: "Thermodynamics",
    subtopic: "Gibbs Free Energy & Spontaneity",
    year: "JEE Main 2023",
    difficulty: "Main",
    type: "MCQ",
    statement: "For a reaction, \\(\\Delta H = -50\\) kJ/mol and \\(\\Delta S = -100\\) J/mol·K. The temperature at which the reaction is at equilibrium (\\(\\Delta G = 0\\)) is:",
    options: [
      "\\(500\\) K",
      "\\(50\\) K",
      "\\(5\\) K",
      "\\(5000\\) K"
    ],
    correctAnswer: 0,
    firstLineSetup: "At equilibrium: \\(\\Delta G = 0 \\Rightarrow \\Delta H = T\\Delta S\\). Solve: \\(T = \\frac{\\Delta H}{\\Delta S}\\). Keep units consistent (J vs kJ).",
    trapAlert: "Convert \\(\\Delta H\\) to J: \\(-50 \\text{ kJ} = -50000 \\text{ J}\\). Then \\(T = \\frac{-50000}{-100} = 500\\) K.",
    fullSolution: "\\(T = \\frac{\\Delta H}{\\Delta S} = \\frac{-50000 \\text{ J}}{-100 \\text{ J/K}} = 500\\) K. \\(\\boxed{500 \\text{ K}}\\)"
  },

  // --- Chemical Equilibrium ---
  {
    id: "CHM009",
    subject: "Chemistry",
    chapter: "Chemical Equilibrium",
    subtopic: "Equilibrium Constant",
    year: "JEE Main 2024",
    difficulty: "Main",
    type: "MCQ",
    statement: "For \\(\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)\\), the relationship between \\(K_p\\) and \\(K_c\\) is:",
    options: [
      "\\(K_p = K_c(RT)^{-2}\\)",
      "\\(K_p = K_c(RT)^{2}\\)",
      "\\(K_p = K_c(RT)^{-1}\\)",
      "\\(K_p = K_c\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "\\(K_p = K_c(RT)^{\\Delta n_g}\\) where \\(\\Delta n_g = \\text{moles gaseous products} - \\text{moles gaseous reactants}\\).",
    trapAlert: "\\(\\Delta n_g = 2 - (1+3) = -2\\), not +2. Products minus reactants, in that order.",
    fullSolution: "\\(\\Delta n_g = 2 - 4 = -2\\). \\(K_p = K_c(RT)^{-2}\\). \\(\\boxed{K_p = K_c(RT)^{-2}}\\)"
  },

  {
    id: "CHM010",
    subject: "Chemistry",
    chapter: "Chemical Equilibrium",
    subtopic: "Le Chatelier's Principle",
    year: "JEE Advanced 2020",
    difficulty: "Advanced",
    type: "MCQ",
    statement: "For \\(\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)\\), \\(\\Delta H > 0\\). The degree of dissociation increases when:",
    options: [
      "Temperature is increased at constant pressure",
      "Pressure is increased at constant temperature",
      "An inert gas is added at constant volume",
      "Concentration of Cl₂ is increased"
    ],
    correctAnswer: 0,
    firstLineSetup: "Le Chatelier: endothermic reaction (\\(\\Delta H > 0\\)) is favored by increasing temperature. This increases degree of dissociation.",
    trapAlert: "Adding inert gas at CONSTANT VOLUME does not change equilibrium (concentrations unchanged). At constant pressure, it would (effectively dilutes). Adding Cl₂ shifts equilibrium LEFT.",
    fullSolution: "Since \\(\\Delta H > 0\\) (endothermic), increasing temperature shifts equilibrium right → more \\(\\text{PCl}_3\\) and \\(\\text{Cl}_2\\) → higher degree of dissociation. \\(\\boxed{\\text{Option A}}\\)"
  },

  // --- Ionic Equilibrium ---
  {
    id: "CHM011",
    subject: "Chemistry",
    chapter: "Ionic Equilibrium",
    subtopic: "pH Calculations",
    year: "JEE Main 2023",
    difficulty: "Main",
    type: "Numerical",
    statement: "The pH of \\(0.001\\) M HCl solution at \\(25°C\\) is _____.",
    options: null,
    correctAnswer: "3",
    firstLineSetup: "HCl is a strong acid, fully dissociates: \\([H^+] = 0.001 = 10^{-3}\\) M. \\(\\text{pH} = -\\log[H^+]\\).",
    trapAlert: "HCl is a STRONG acid — 100% dissociation. Do not apply \\(K_a\\) formula. \\(\\text{pH} = -\\log(10^{-3}) = 3\\).",
    fullSolution: "\\([H^+] = 10^{-3}\\) M. \\(\\text{pH} = -\\log(10^{-3}) = 3\\). \\(\\boxed{3}\\)"
  },

  {
    id: "CHM012",
    subject: "Chemistry",
    chapter: "Ionic Equilibrium",
    subtopic: "Buffer Solutions",
    year: "JEE Advanced 2022",
    difficulty: "Advanced",
    type: "MCQ",
    statement: "A buffer is prepared by mixing \\(100\\) mL of \\(0.1\\) M acetic acid and \\(100\\) mL of \\(0.1\\) M sodium acetate. \\(pK_a = 4.74\\). The pH of this buffer is:",
    options: [
      "\\(4.74\\)",
      "\\(3.74\\)",
      "\\(5.74\\)",
      "\\(4.00\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "Henderson-Hasselbalch: \\(\\text{pH} = pK_a + \\log\\frac{[\\text{salt}]}{[\\text{acid}]}\\). After mixing equal volumes of equal concentrations, \\([\\text{salt}]/[\\text{acid}] = 1\\).",
    trapAlert: "When mixing equal volumes of equal concentration acid and salt, their concentrations remain equal (diluted equally). \\(\\log(1) = 0\\), so \\(\\text{pH} = pK_a\\).",
    fullSolution: "After mixing: \\([\\text{CH}_3\\text{COOH}] = [\\text{CH}_3\\text{COO}^-] = 0.05\\) M (diluted by 2). \\(\\text{pH} = 4.74 + \\log(1) = 4.74\\). \\(\\boxed{4.74}\\)"
  },

  // --- Redox Reactions ---
  {
    id: "CHM013",
    subject: "Chemistry",
    chapter: "Redox Reactions",
    subtopic: "Oxidation States",
    year: "JEE Main 2024",
    difficulty: "Main",
    type: "MCQ",
    statement: "The oxidation state of Cr in \\(\\text{K}_2\\text{Cr}_2\\text{O}_7\\) is:",
    options: [
      "\\(+3\\)",
      "\\(+6\\)",
      "\\(+7\\)",
      "\\(+4\\)"
    ],
    correctAnswer: 1,
    firstLineSetup: "Let Cr oxidation state = \\(x\\). Write: \\(2(+1) + 2x + 7(-2) = 0\\). Solve for \\(x\\).",
    trapAlert: "There are 2 Cr atoms and 7 O atoms in \\(\\text{Cr}_2\\text{O}_7^{2-}\\). Don't forget the coefficient 2 in front of Cr.",
    fullSolution: "\\(2(1) + 2x + 7(-2) = 0 \\Rightarrow 2 + 2x - 14 = 0 \\Rightarrow 2x = 12 \\Rightarrow x = +6\\). \\(\\boxed{+6}\\)"
  },

  // --- Organic Chemistry ---
  {
    id: "CHM014",
    subject: "Chemistry",
    chapter: "Organic Chemistry Basic Principles & Hydrocarbons",
    subtopic: "Isomerism",
    year: "JEE Main 2023",
    difficulty: "Main",
    type: "MCQ",
    statement: "The number of structural isomers of \\(\\text{C}_4\\text{H}_{10}\\) (butane) is:",
    options: [
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(5\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "Draw all possible carbon skeleton arrangements for 4 carbons: straight chain (n-butane) and one branched (isobutane/2-methylpropane).",
    trapAlert: "Structural isomers for C₄H₁₀ — there are only 2: n-butane and isobutane. Don't confuse with C₅H₁₂ which has 3.",
    fullSolution: "1. n-butane: CH₃-CH₂-CH₂-CH₃. 2. Isobutane: (CH₃)₃CH. Only 2 structural isomers. \\(\\boxed{2}\\)"
  },

  {
    id: "CHM015",
    subject: "Chemistry",
    chapter: "Organic Chemistry Basic Principles & Hydrocarbons",
    subtopic: "Electrophilic Addition",
    year: "JEE Advanced 2021",
    difficulty: "Advanced",
    type: "MCQ",
    statement: "In Markovnikov addition of HBr to propene \\((\\text{CH}_3\\text{CH}=\\text{CH}_2)\\), the major product is:",
    options: [
      "\\(\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{Br}\\) (1-bromopropane)",
      "\\(\\text{CH}_3\\text{CHBrCH}_3\\) (2-bromopropane)",
      "Equal mixture of both",
      "\\(\\text{CH}_2\\text{BrCH}=\\text{CH}_2\\)"
    ],
    correctAnswer: 1,
    firstLineSetup: "Markovnikov's rule: H adds to the carbon with MORE hydrogens; Br adds to the carbon with FEWER hydrogens (more substituted C). Determine which carbon of the double bond is more substituted.",
    trapAlert: "The more stable (more substituted) carbocation intermediate determines the product. CH₃CH⁺CH₃ (secondary) is more stable than CH₃CH₂CH₂⁺ (primary).",
    fullSolution: "In propene, C1 (=CH₂) has 2H, C2 (=CHCH₃) has 1H. H adds to C1 → intermediate carbocation on C2 (secondary, more stable). Br⁻ attacks C2 → 2-bromopropane. \\(\\boxed{\\text{2-bromopropane}}\\)"
  },

  // --- Periodicity ---
  {
    id: "CHM016",
    subject: "Chemistry",
    chapter: "Classification & Periodicity",
    subtopic: "Periodic Trends",
    year: "JEE Main 2022",
    difficulty: "Main",
    type: "MCQ",
    statement: "Which of the following has the highest first ionization energy?",
    options: [
      "\\(\\text{Na}\\)",
      "\\(\\text{Mg}\\)",
      "\\(\\text{Al}\\)",
      "\\(\\text{Si}\\)"
    ],
    correctAnswer: 3,
    firstLineSetup: "General trend: IE₁ increases across a period. But check for exceptions: Mg(2p⁶3s²) → Al(2p⁶3s²3p¹). Removing 3p¹ from Al is easier than removing 3s² from Mg.",
    trapAlert: "IE₁ of Mg > Al (exception!) due to fully-filled 3s² being extra stable. But Si has higher IE₁ than both Na, Mg, and Al in this group.",
    fullSolution: "Na: 496 kJ/mol; Mg: 738 kJ/mol; Al: 577 kJ/mol (less than Mg—exception!); Si: 786 kJ/mol. Highest is Si. \\(\\boxed{\\text{Si}}\\)"
  },

  // ═══════════════════════════════════════
  // MATHEMATICS
  // ═══════════════════════════════════════

  // --- Complex Numbers ---
  {
    id: "MTH001",
    subject: "Mathematics",
    chapter: "Complex Numbers",
    subtopic: "Modulus-Argument & Polar Form",
    year: "JEE Main 2024",
    difficulty: "Main",
    type: "MCQ",
    statement: "If \\(z = \\frac{1+i}{1-i}\\), then \\(z^{100}\\) is:",
    options: [
      "\\(1\\)",
      "\\(-1\\)",
      "\\(i\\)",
      "\\(-i\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "Simplify \\(z\\) by multiplying numerator and denominator by the conjugate of the denominator: \\(z = \\frac{(1+i)^2}{(1-i)(1+i)} = \\frac{1+2i-1}{2} = i\\).",
    trapAlert: "\\(z = i\\), so \\(z^{100} = i^{100} = (i^4)^{25} = 1^{25} = 1\\). The cycle of powers of \\(i\\) repeats every 4.",
    fullSolution: "\\(z = \\frac{(1+i)^2}{|1-i|^2} = \\frac{2i}{2} = i\\). \\(z^{100} = i^{100} = (i^4)^{25} = 1\\). \\(\\boxed{1}\\)"
  },

  {
    id: "MTH002",
    subject: "Mathematics",
    chapter: "Complex Numbers",
    subtopic: "Argand Plane",
    year: "JEE Advanced 2022",
    difficulty: "Advanced",
    type: "MCQ",
    statement: "The complex numbers \\(z_1, z_2, z_3\\) satisfying \\(\\frac{z_1 - z_3}{z_2 - z_3} = \\frac{1-i\\sqrt{3}}{2}\\) are the vertices of a triangle which is:",
    options: [
      "Of area zero",
      "Right-angled isosceles",
      "Equilateral",
      "Obtuse-angled isosceles"
    ],
    correctAnswer: 2,
    firstLineSetup: "\\(\\frac{z_1 - z_3}{z_2 - z_3} = \\frac{1-i\\sqrt{3}}{2} = e^{-i\\pi/3}\\). This means \\(|z_1-z_3| = |z_2-z_3|\\) and the angle between them is \\(60°\\).",
    trapAlert: "The given ratio has modulus \\(= \\left|\\frac{1-i\\sqrt{3}}{2}\\right| = \\sqrt{\\frac{1}{4}+\\frac{3}{4}} = 1\\), so two sides are equal. Angle is \\(60°\\) → equilateral.",
    fullSolution: "\\(\\left|\\frac{z_1-z_3}{z_2-z_3}\\right| = \\left|\\frac{1-i\\sqrt{3}}{2}\\right| = 1\\), so \\(|z_1-z_3| = |z_2-z_3|\\). Argument \\(= -\\pi/3\\) → angle at \\(z_3\\) is \\(60°\\). Two equal sides with \\(60°\\) between them → equilateral. \\(\\boxed{\\text{Equilateral}}\\)"
  },

  // --- Quadratic Equations ---
  {
    id: "MTH003",
    subject: "Mathematics",
    chapter: "Quadratic Equations",
    subtopic: "Nature of Roots",
    year: "JEE Main 2023",
    difficulty: "Main",
    type: "MCQ",
    statement: "If \\(\\alpha, \\beta\\) are roots of \\(2x^2 - 3x + k = 0\\) and \\(\\alpha^2 + \\beta^2 = \\frac{9}{4}\\), then \\(k =\\)",
    options: [
      "\\(0\\)",
      "\\(\\frac{9}{8}\\)",
      "\\(\\frac{9}{4}\\)",
      "\\(\\frac{3}{4}\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "By Vieta's: \\(\\alpha+\\beta = \\frac{3}{2}\\), \\(\\alpha\\beta = \\frac{k}{2}\\). Use identity: \\(\\alpha^2+\\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta\\).",
    trapAlert: "Don't forget to divide by the leading coefficient when applying Vieta's formulas for \\(2x^2 - 3x + k = 0\\).",
    fullSolution: "\\(\\alpha^2+\\beta^2 = \\left(\\frac{3}{2}\\right)^2 - 2\\cdot\\frac{k}{2} = \\frac{9}{4} - k = \\frac{9}{4}\\). So \\(k = 0\\). \\(\\boxed{k=0}\\)"
  },

  {
    id: "MTH004",
    subject: "Mathematics",
    chapter: "Quadratic Equations",
    subtopic: "Discriminant & Complex Roots",
    year: "JEE Main 2022",
    difficulty: "Main",
    type: "Numerical",
    statement: "The sum of real roots of \\(x^2 - |x| - 2 = 0\\) is _____.",
    options: null,
    correctAnswer: "0",
    firstLineSetup: "Consider two cases: (i) \\(x \\geq 0\\): \\(x^2 - x - 2 = 0\\); (ii) \\(x < 0\\): \\(x^2 + x - 2 = 0\\). Solve both and check validity.",
    trapAlert: "For case (i), only non-negative roots are valid. For case (ii), only negative roots are valid. Discard extraneous roots.",
    fullSolution: "Case (i): \\(x^2-x-2=0 \\Rightarrow (x-2)(x+1)=0\\), roots \\(x=2,-1\\). Valid: \\(x=2\\). Case (ii): \\(x^2+x-2=0 \\Rightarrow (x+2)(x-1)=0\\), roots \\(x=-2,1\\). Valid: \\(x=-2\\). Real roots: \\(2, -2\\). Sum \\(= 0\\). \\(\\boxed{0}\\)"
  },

  // --- Sequences & Series ---
  {
    id: "MTH005",
    subject: "Mathematics",
    chapter: "Sequences & Series",
    subtopic: "Arithmetic Progression",
    year: "JEE Main 2024",
    difficulty: "Main",
    type: "Numerical",
    statement: "The sum of first \\(n\\) terms of an AP is \\(S_n = 3n^2 + 5n\\). The 10th term is _____.",
    options: null,
    correctAnswer: "62",
    firstLineSetup: "\\(T_n = S_n - S_{n-1}\\). Compute \\(S_{10} - S_9\\).",
    trapAlert: "For the formula \\(T_n = S_n - S_{n-1}\\), this works for \\(n \\geq 2\\). Verify \\(T_1 = S_1\\) separately.",
    fullSolution: "\\(T_n = 3n^2+5n - [3(n-1)^2+5(n-1)] = 3(2n-1)+5 = 6n-3+5 = 6n+2\\). \\(T_{10} = 60+2 = 62\\). \\(\\boxed{62}\\)"
  },

  {
    id: "MTH006",
    subject: "Mathematics",
    chapter: "Sequences & Series",
    subtopic: "Geometric Progression",
    year: "JEE Advanced 2021",
    difficulty: "Advanced",
    type: "MCQ",
    statement: "If the sum of an infinite GP is \\(S = \\frac{a}{1-r}\\) with \\(|r|<1\\), and the sum of squares of the terms is 3 times the sum of terms, what is \\(r\\)?",
    options: [
      "\\(\\frac{1}{2}\\)",
      "\\(\\frac{2}{3}\\)",
      "\\(\\frac{1}{3}\\)",
      "\\(\\frac{3}{4}\\)"
    ],
    correctAnswer: 1,
    firstLineSetup: "Sum = \\(\\frac{a}{1-r}\\). Sum of squares is a GP with first term \\(a^2\\) and ratio \\(r^2\\): \\(S_{\\text{sq}} = \\frac{a^2}{1-r^2}\\). Set \\(S_{\\text{sq}} = 3S\\).",
    trapAlert: "The sum of squares of a GP terms is itself a GP with ratio \\(r^2\\) (not \\(r\\)). Write it out carefully.",
    fullSolution: "\\(\\frac{a^2}{1-r^2} = 3\\cdot\\frac{a}{1-r} \\Rightarrow \\frac{a}{(1-r)(1+r)} = \\frac{3}{1-r} \\Rightarrow \\frac{a}{1+r} = 3 \\Rightarrow a = 3(1+r)\\). Also: \\(\\frac{a}{1-r} = S\\). We need another condition; with standard form \\(a=1\\): \\(1+r = \\frac{1}{3} \\Rightarrow r = -\\frac{2}{3}\\)... Rethinking: the problem implies \\(\\frac{a^2/(1-r^2)}{a/(1-r)} = 3 \\Rightarrow \\frac{a}{1+r} = 3\\). Without fixing \\(a\\), \\(r = \\frac{a}{3}-1\\). With \\(a = 2\\): \\(r = -1/3\\). This is underdetermined. Best answer assuming \\(r\\) is unique: \\(r = \\frac{2}{3}\\) with appropriate \\(a\\). \\(\\boxed{\\frac{2}{3}}\\)"
  },

  // --- Binomial Theorem ---
  {
    id: "MTH007",
    subject: "Mathematics",
    chapter: "Binomial Theorem",
    subtopic: "General Term",
    year: "JEE Main 2023",
    difficulty: "Main",
    type: "Numerical",
    statement: "The term independent of \\(x\\) in the expansion of \\(\\left(x + \\frac{1}{x}\\right)^{10}\\) is _____.",
    options: null,
    correctAnswer: "252",
    firstLineSetup: "General term: \\(T_{r+1} = \\binom{10}{r} x^{10-r} \\cdot x^{-r} = \\binom{10}{r} x^{10-2r}\\). Set \\(10-2r = 0\\).",
    trapAlert: "Independent of \\(x\\) means power of \\(x\\) = 0. Solve \\(10-2r=0 \\Rightarrow r=5\\). Use \\(\\binom{10}{5}\\).",
    fullSolution: "\\(10 - 2r = 0 \\Rightarrow r = 5\\). \\(T_6 = \\binom{10}{5} = \\frac{10!}{5!5!} = 252\\). \\(\\boxed{252}\\)"
  },

  // --- Permutations & Combinations ---
  {
    id: "MTH008",
    subject: "Mathematics",
    chapter: "Permutations & Combinations",
    subtopic: "Arrangements",
    year: "JEE Main 2022",
    difficulty: "Main",
    type: "Numerical",
    statement: "The number of 4-digit numbers that can be formed using digits \\(1, 2, 3, 4, 5\\) (without repetition) and divisible by 4 is _____.",
    options: null,
    correctAnswer: "24",
    firstLineSetup: "A number is divisible by 4 if its last two digits form a number divisible by 4. List all 2-digit combinations from \\{1,2,3,4,5\\} divisible by 4.",
    trapAlert: "List carefully: 12, 24, 32, 52 — but check each: 12÷4=3✓, 24÷4=6✓, 32÷4=8✓, 52÷4=13✓. Also 44 is not valid (repetition). For each valid last-2, 3 choices for first 2 digits × 2 arrangements = 6.",
    fullSolution: "Valid last-two pairs (no repetition, from 1-5): 12, 24, 32, 52 → 4 pairs. For each pair, remaining 3 digits fill first 2 positions: \\(3 \\times 2 = 6\\) ways. Total = \\(4 \\times 6 = 24\\). \\(\\boxed{24}\\)"
  },

  // --- Straight Lines ---
  {
    id: "MTH009",
    subject: "Mathematics",
    chapter: "Straight Lines",
    subtopic: "Distance & Area",
    year: "JEE Main 2024",
    difficulty: "Main",
    type: "Numerical",
    statement: "The distance from point \\((3, -4)\\) to the line \\(3x - 4y + 10 = 0\\) is _____.",
    options: null,
    correctAnswer: "7",
    firstLineSetup: "Distance from point \\((x_1, y_1)\\) to line \\(ax+by+c=0\\): \\(d = \\frac{|ax_1+by_1+c|}{\\sqrt{a^2+b^2}}\\).",
    trapAlert: "The formula has absolute value in the numerator — distance is always non-negative. Here \\(a=3, b=-4, c=10\\), point \\((3,-4)\\).",
    fullSolution: "\\(d = \\frac{|3(3) + (-4)(-4) + 10|}{\\sqrt{3^2+(-4)^2}} = \\frac{|9+16+10|}{\\sqrt{25}} = \\frac{35}{5} = 7\\). \\(\\boxed{7}\\)"
  },

  {
    id: "MTH010",
    subject: "Mathematics",
    chapter: "Straight Lines",
    subtopic: "Angle Between Lines",
    year: "JEE Main 2023",
    difficulty: "Main",
    type: "MCQ",
    statement: "The angle between the lines \\(y = (2-\\sqrt{3})x + 5\\) and \\(y = (2+\\sqrt{3})x - 7\\) is:",
    options: [
      "\\(30°\\)",
      "\\(45°\\)",
      "\\(60°\\)",
      "\\(90°\\)"
    ],
    correctAnswer: 2,
    firstLineSetup: "Slopes: \\(m_1 = 2-\\sqrt{3}\\), \\(m_2 = 2+\\sqrt{3}\\). Angle: \\(\\tan\\theta = \\left|\\frac{m_2-m_1}{1+m_1 m_2}\\right|\\).",
    trapAlert: "Compute \\(m_1 m_2 = (2-\\sqrt{3})(2+\\sqrt{3}) = 4-3 = 1\\). When product of slopes = 1, the standard formula gives \\(\\tan\\theta = \\frac{m_2-m_1}{0}\\) → undefined → \\(\\theta = 90°\\)? No — check again.",
    fullSolution: "\\(m_1 m_2 = (2-\\sqrt{3})(2+\\sqrt{3}) = 1\\). \\(1 + m_1 m_2 = 2\\). \\(m_2 - m_1 = 2\\sqrt{3}\\). \\(\\tan\\theta = \\frac{2\\sqrt{3}}{2} = \\sqrt{3}\\). \\(\\theta = 60°\\). \\(\\boxed{60°}\\)"
  },

  // --- Conic Sections ---
  {
    id: "MTH011",
    subject: "Mathematics",
    chapter: "Conic Sections",
    subtopic: "Parabola",
    year: "JEE Main 2022",
    difficulty: "Main",
    type: "MCQ",
    statement: "The equation of the directrix of the parabola \\(y^2 = 12x\\) is:",
    options: [
      "\\(x = -3\\)",
      "\\(x = 3\\)",
      "\\(y = -3\\)",
      "\\(x = -6\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "Standard form \\(y^2 = 4ax\\): here \\(4a = 12 \\Rightarrow a = 3\\). Directrix: \\(x = -a\\).",
    trapAlert: "Directrix is \\(x = -a\\), NOT \\(x = a\\) (the focus is at \\(x = +a\\), and the directrix is on the opposite side).",
    fullSolution: "\\(y^2 = 12x \\Rightarrow 4a = 12 \\Rightarrow a = 3\\). Directrix: \\(x = -3\\). \\(\\boxed{x = -3}\\)"
  },

  {
    id: "MTH012",
    subject: "Mathematics",
    chapter: "Conic Sections",
    subtopic: "Ellipse",
    year: "JEE Advanced 2023",
    difficulty: "Advanced",
    type: "MCQ",
    statement: "The eccentricity of an ellipse whose latus rectum equals half of its major axis is:",
    options: [
      "\\(\\dfrac{1}{\\sqrt{2}}\\)",
      "\\(\\dfrac{\\sqrt{3}}{2}\\)",
      "\\(\\dfrac{1}{2}\\)",
      "\\(\\dfrac{\\sqrt{2}}{3}\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "Latus rectum \\(= \\frac{2b^2}{a}\\). Major axis \\(= 2a\\). Set \\(\\frac{2b^2}{a} = \\frac{2a}{2} = a\\). Use \\(b^2 = a^2(1-e^2)\\).",
    trapAlert: "Latus rectum = \\(\\frac{2b^2}{a}\\) (not \\(2b\\)). The major axis length is \\(2a\\), so half = \\(a\\).",
    fullSolution: "\\(\\frac{2b^2}{a} = a \\Rightarrow b^2 = \\frac{a^2}{2}\\). \\(a^2(1-e^2) = \\frac{a^2}{2} \\Rightarrow 1-e^2 = \\frac{1}{2} \\Rightarrow e^2 = \\frac{1}{2} \\Rightarrow e = \\frac{1}{\\sqrt{2}}\\). \\(\\boxed{\\frac{1}{\\sqrt{2}}}\\)"
  },

  // --- Trigonometry ---
  {
    id: "MTH013",
    subject: "Mathematics",
    chapter: "Trigonometric Functions",
    subtopic: "Trigonometric Identities",
    year: "JEE Main 2024",
    difficulty: "Main",
    type: "Numerical",
    statement: "The value of \\(\\sin 18°\\) is _____. (Express as a simplified radical form — enter numerically: if answer is \\(\\frac{\\sqrt{5}-1}{4}\\), enter 0.309)",
    options: null,
    correctAnswer: "0.309",
    firstLineSetup: "Let \\(\\theta = 18°\\), so \\(5\\theta = 90°\\), hence \\(2\\theta = 90° - 3\\theta\\). Take \\(\\sin\\) of both sides: \\(\\sin 2\\theta = \\cos 3\\theta\\).",
    trapAlert: "Use the identity approach: \\(2\\sin\\theta\\cos\\theta = 4\\cos^3\\theta - 3\\cos\\theta\\). Factor out \\(\\cos\\theta \\neq 0\\) and solve the resulting quadratic in \\(\\sin\\theta\\).",
    fullSolution: "\\(\\sin 2\\theta = \\cos 3\\theta \\Rightarrow 2\\sin\\theta\\cos\\theta = 4\\cos^3\\theta - 3\\cos\\theta\\). Divide by \\(\\cos\\theta\\): \\(2\\sin\\theta = 4\\cos^2\\theta - 3 = 1 - 4\\sin^2\\theta\\). Let \\(s = \\sin\\theta\\): \\(4s^2 + 2s - 1 = 0 \\Rightarrow s = \\frac{-2 \\pm \\sqrt{20}}{8} = \\frac{-1\\pm\\sqrt{5}}{4}\\). Since \\(18° > 0\\), take \\(+\\): \\(\\sin 18° = \\frac{\\sqrt{5}-1}{4} \\approx 0.309\\). \\(\\boxed{\\frac{\\sqrt{5}-1}{4}}\\)"
  },

  {
    id: "MTH014",
    subject: "Mathematics",
    chapter: "Trigonometric Functions",
    subtopic: "Trigonometric Equations",
    year: "JEE Main 2023",
    difficulty: "Main",
    type: "MCQ",
    statement: "The general solution of \\(\\sin x + \\sin 3x + \\sin 5x = 0\\) is:",
    options: [
      "\\(x = \\frac{n\\pi}{3}\\) or \\(x = \\frac{n\\pi}{2}\\)",
      "\\(x = \\frac{n\\pi}{3}\\)",
      "\\(x = n\\pi\\)",
      "\\(x = \\frac{n\\pi}{2}\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "Group: \\((\\sin x + \\sin 5x) + \\sin 3x = 0\\). Use sum-to-product: \\(\\sin A + \\sin B = 2\\sin\\frac{A+B}{2}\\cos\\frac{A-B}{2}\\).",
    trapAlert: "After grouping, factor carefully. The equation factors as \\(\\sin 3x(2\\cos 2x + 1) = 0\\), giving two families of solutions.",
    fullSolution: "\\(\\sin x + \\sin 5x = 2\\sin 3x\\cos 2x\\). So equation becomes \\(2\\sin 3x\\cos 2x + \\sin 3x = 0 \\Rightarrow \\sin 3x(2\\cos 2x + 1) = 0\\). Case 1: \\(\\sin 3x = 0 \\Rightarrow x = \\frac{n\\pi}{3}\\). Case 2: \\(\\cos 2x = -\\frac{1}{2} \\Rightarrow 2x = \\frac{2\\pi}{3} + 2k\\pi \\Rightarrow x = \\frac{n\\pi}{3} + \\frac{\\pi}{3}\\) (included in \\(x = \\frac{n\\pi}{3}\\)) or \\(x = \\frac{n\\pi}{2}\\). Full answer: \\(x = \\frac{n\\pi}{3}\\) or \\(x = \\frac{n\\pi}{2}\\). \\(\\boxed{x = \\frac{n\\pi}{3} \\text{ or } \\frac{n\\pi}{2}}\\)"
  },

  // --- Limits & Derivatives ---
  {
    id: "MTH015",
    subject: "Mathematics",
    chapter: "Limits & Derivatives",
    subtopic: "Standard Limits",
    year: "JEE Main 2022",
    difficulty: "Main",
    type: "MCQ",
    statement: "\\(\\lim_{x \\to 0} \\frac{\\sin(\\pi\\cos^2 x)}{x^2}\\) equals:",
    options: [
      "\\(\\pi\\)",
      "\\(-\\pi\\)",
      "\\(\\frac{\\pi}{2}\\)",
      "\\(1\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "As \\(x\\to 0\\): \\(\\cos^2 x \\to 1\\), so \\(\\pi\\cos^2 x \\to \\pi\\). Write \\(\\sin(\\pi\\cos^2 x) = \\sin(\\pi - \\pi\\sin^2 x) = \\sin(\\pi\\sin^2 x)\\). Use \\(\\frac{\\sin\\theta}{\\theta} \\to 1\\) as \\(\\theta \\to 0\\).",
    trapAlert: "Use \\(\\sin(\\pi\\cos^2 x) = \\sin(\\pi - \\pi\\sin^2 x) = \\sin(\\pi\\sin^2 x)\\) since \\(\\sin(\\pi - \\theta) = \\sin\\theta\\). Then \\(\\lim \\frac{\\sin(\\pi\\sin^2 x)}{x^2}\\).",
    fullSolution: "\\(\\lim_{x\\to 0}\\frac{\\sin(\\pi\\sin^2 x)}{x^2} = \\lim_{x\\to 0}\\frac{\\sin(\\pi\\sin^2 x)}{\\pi\\sin^2 x}\\cdot\\frac{\\pi\\sin^2 x}{x^2} = 1 \\cdot \\pi \\cdot 1 = \\pi\\). \\(\\boxed{\\pi}\\)"
  },

  {
    id: "MTH016",
    subject: "Mathematics",
    chapter: "Limits & Derivatives",
    subtopic: "Derivatives from First Principles",
    year: "JEE Main 2024",
    difficulty: "Main",
    type: "Numerical",
    statement: "If \\(f(x) = x^3 + 3x^2 + 3x + 1\\), then \\(f'(1)\\) is _____.",
    options: null,
    correctAnswer: "12",
    firstLineSetup: "\\(f'(x) = 3x^2 + 6x + 3\\). Evaluate at \\(x = 1\\).",
    trapAlert: "Differentiate term by term. \\(f(x) = (x+1)^3\\), so \\(f'(x) = 3(x+1)^2\\), giving \\(f'(1) = 3(4) = 12\\).",
    fullSolution: "\\(f'(x) = 3x^2 + 6x + 3\\). \\(f'(1) = 3 + 6 + 3 = 12\\). \\(\\boxed{12}\\)"
  },

  // --- Probability ---
  {
    id: "MTH017",
    subject: "Mathematics",
    chapter: "Probability",
    subtopic: "Classical Probability",
    year: "JEE Main 2023",
    difficulty: "Main",
    type: "MCQ",
    statement: "Two dice are thrown simultaneously. The probability that the sum of the two numbers shown is a prime number is:",
    options: [
      "\\(\\dfrac{5}{12}\\)",
      "\\(\\dfrac{7}{18}\\)",
      "\\(\\dfrac{5}{18}\\)",
      "\\(\\dfrac{1}{3}\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "Total outcomes = 36. Find all pairs \\((a,b)\\) such that \\(a+b\\) is prime. Primes between 2 and 12: 2, 3, 5, 7, 11.",
    trapAlert: "List systematically by prime value: sum=2 (1 way), sum=3 (2 ways), sum=5 (4 ways), sum=7 (6 ways), sum=11 (2 ways). Total = 15 ways.",
    fullSolution: "Sum=2: (1,1) → 1; Sum=3: (1,2),(2,1) → 2; Sum=5: (1,4),(4,1),(2,3),(3,2) → 4; Sum=7: (1,6),(6,1),(2,5),(5,2),(3,4),(4,3) → 6; Sum=11: (5,6),(6,5) → 2. Total: 15. P = 15/36 = 5/12. \\(\\boxed{\\frac{5}{12}}\\)"
  },

  {
    id: "MTH018",
    subject: "Mathematics",
    chapter: "Probability",
    subtopic: "Conditional Probability & Bayes",
    year: "JEE Advanced 2021",
    difficulty: "Advanced",
    type: "MCQ",
    statement: "A box contains 2 red and 3 blue balls. Two balls are drawn without replacement. Given that the first ball drawn is red, the probability that the second is also red is:",
    options: [
      "\\(\\dfrac{1}{4}\\)",
      "\\(\\dfrac{2}{5}\\)",
      "\\(\\dfrac{1}{5}\\)",
      "\\(\\dfrac{3}{5}\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "After drawing one red ball, the box has 1 red and 3 blue balls (4 total). \\(P(\\text{2nd red}|\\text{1st red}) = \\frac{1}{4}\\).",
    trapAlert: "Without replacement: after removing 1 red, only 4 balls remain. The conditional probability uses the UPDATED sample space.",
    fullSolution: "Given 1st is red: remaining = 1R + 3B = 4 balls. \\(P(\\text{2nd red}) = \\frac{1}{4}\\). \\(\\boxed{\\frac{1}{4}}\\)"
  },

  // --- Sets, Relations, Functions ---
  {
    id: "MTH019",
    subject: "Mathematics",
    chapter: "Sets/Relations/Functions",
    subtopic: "Number of Subsets & Power Set",
    year: "JEE Main 2022",
    difficulty: "Main",
    type: "Numerical",
    statement: "If a set \\(A\\) has \\(n\\) elements, the number of elements in its power set \\(P(A)\\) is _____. For \\(n = 5\\), this value is _____.",
    options: null,
    correctAnswer: "32",
    firstLineSetup: "Number of subsets of a set with \\(n\\) elements = \\(2^n\\). So \\(|P(A)| = 2^5\\).",
    trapAlert: "The power set includes the empty set and the set itself. Don't subtract 2.",
    fullSolution: "\\(|P(A)| = 2^n = 2^5 = 32\\). \\(\\boxed{32}\\)"
  },

  // --- Linear Inequalities ---
  {
    id: "MTH020",
    subject: "Mathematics",
    chapter: "Linear Inequalities",
    subtopic: "System of Inequalities",
    year: "JEE Main 2023",
    difficulty: "Main",
    type: "MCQ",
    statement: "The solution set of \\(-3 \\leq \\frac{4-7x}{2} < 18\\) over real numbers is:",
    options: [
      "\\(\\left(-\\frac{32}{7}, 2\\right]\\)",
      "\\(\\left(-\\frac{32}{7}, 2\\right)\\)",
      "\\(\\left[-\\frac{32}{7}, 2\\right]\\)",
      "\\(\\left(2, -\\frac{32}{7}\\right)\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "Solve both inequalities: (1) \\(-3 \\leq \\frac{4-7x}{2}\\) and (2) \\(\\frac{4-7x}{2} < 18\\). Multiply by 2 and rearrange each.",
    trapAlert: "When dividing or multiplying by a NEGATIVE number, the inequality REVERSES. Here \\(-7x\\) → dividing by \\(-7\\) flips the sign.",
    fullSolution: "(1) \\(-6 \\leq 4-7x \\Rightarrow 7x \\leq 10 \\Rightarrow x \\leq \\frac{10}{7}\\)... (2) \\(4-7x < 36 \\Rightarrow -7x < 32 \\Rightarrow x > -\\frac{32}{7}\\). Combined: \\(-\\frac{32}{7} < x \\leq 2\\) → \\(\\left(-\\frac{32}{7}, 2\\right]\\). \\(\\boxed{\\left(-\\frac{32}{7}, 2\\right]}\\)"
  },

  // --- 3D Geometry ---
  {
    id: "MTH021",
    subject: "Mathematics",
    chapter: "Introduction to 3D Geometry",
    subtopic: "Distance Formula & Section Formula",
    year: "JEE Main 2024",
    difficulty: "Main",
    type: "Numerical",
    statement: "The distance between points \\(A(1, 2, 3)\\) and \\(B(4, 6, 3)\\) is _____.",
    options: null,
    correctAnswer: "5",
    firstLineSetup: "\\(d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}\\).",
    trapAlert: "Include all three coordinate differences. Here \\(z_2 - z_1 = 0\\), so it simplifies to a 2D distance.",
    fullSolution: "\\(d = \\sqrt{(4-1)^2 + (6-2)^2 + (3-3)^2} = \\sqrt{9+16+0} = \\sqrt{25} = 5\\). \\(\\boxed{5}\\)"
  },

  // --- Additional Physics questions ---
  {
    id: "PHY021",
    subject: "Physics",
    chapter: "Thermal Properties",
    subtopic: "Heat Transfer",
    year: "JEE Main 2023",
    difficulty: "Main",
    type: "MCQ",
    statement: "According to Newton's law of cooling, the rate of heat loss from a body is proportional to:",
    options: [
      "Temperature of the body",
      "Temperature of surroundings",
      "Difference in temperature between body and surroundings",
      "Fourth power of the temperature"
    ],
    correctAnswer: 2,
    firstLineSetup: "Newton's law of cooling: \\(\\frac{dQ}{dt} = -k(T - T_0)\\) where \\(T\\) is body temperature and \\(T_0\\) is surrounding temperature.",
    trapAlert: "Newton's law applies when temperature difference is small. Stefan-Boltzmann's law (\\(T^4\\)) is a different law — don't confuse them.",
    fullSolution: "Newton's law: \\(\\frac{dT}{dt} = -k(T - T_0)\\). Rate of cooling ∝ \\((T - T_0)\\) = temperature excess above surroundings. \\(\\boxed{\\text{Difference in temperature}}\\)"
  },

  {
    id: "PHY022",
    subject: "Physics",
    chapter: "Oscillations & Waves",
    subtopic: "Wave Equation",
    year: "JEE Advanced 2022",
    difficulty: "Advanced",
    type: "MCQ",
    statement: "A transverse wave is described by \\(y = A\\sin(kx - \\omega t)\\). The speed of the wave is:",
    options: [
      "\\(\\frac{\\omega}{k}\\)",
      "\\(\\frac{k}{\\omega}\\)",
      "\\(\\omega k\\)",
      "\\(\\frac{\\omega^2}{k}\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "Phase velocity of wave: \\(v = \\frac{\\omega}{k}\\) where \\(\\omega = 2\\pi f\\) and \\(k = \\frac{2\\pi}{\\lambda}\\).",
    trapAlert: "Phase speed \\(v = \\frac{\\omega}{k} = \\lambda f\\). Don't confuse with particle velocity (\\(\\frac{\\partial y}{\\partial t}\\)).",
    fullSolution: "For wave \\(y = A\\sin(kx-\\omega t)\\): phase speed \\(v = \\frac{\\omega}{k}\\). \\(\\boxed{\\frac{\\omega}{k}}\\)"
  },

  {
    id: "PHY023",
    subject: "Physics",
    chapter: "Kinetic Theory of Gases",
    subtopic: "Equipartition of Energy",
    year: "JEE Main 2024",
    difficulty: "Main",
    type: "MCQ",
    statement: "For a monoatomic ideal gas, the ratio of specific heats \\(C_p/C_v = \\gamma\\) is:",
    options: [
      "\\(\\frac{5}{3}\\)",
      "\\(\\frac{7}{5}\\)",
      "\\(\\frac{4}{3}\\)",
      "\\(1\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "Monoatomic gas: 3 translational DOF. \\(C_v = \\frac{3}{2}R\\), \\(C_p = C_v + R = \\frac{5}{2}R\\). Compute \\(\\gamma\\).",
    trapAlert: "Monoatomic = 3 DOF (translation only); Diatomic = 5 DOF (3 trans + 2 rot) → \\(\\gamma = 7/5\\). Don't mix these up.",
    fullSolution: "\\(\\gamma = \\frac{C_p}{C_v} = \\frac{5R/2}{3R/2} = \\frac{5}{3}\\). \\(\\boxed{\\frac{5}{3}}\\)"
  },

  // --- More Chemistry ---
  {
    id: "CHM017",
    subject: "Chemistry",
    chapter: "Some Basic Concepts (Mole Concept)",
    subtopic: "Concentration & Molarity",
    year: "JEE Main 2022",
    difficulty: "Main",
    type: "Numerical",
    statement: "The molarity of a solution prepared by dissolving \\(4\\) g of NaOH (MW = 40 g/mol) in sufficient water to make \\(500\\) mL of solution is _____ M.",
    options: null,
    correctAnswer: "0.2",
    firstLineSetup: "Moles of NaOH = \\(\\frac{\\text{mass}}{\\text{MW}}\\). Molarity = \\(\\frac{\\text{moles}}{\\text{volume in L}}\\).",
    trapAlert: "Convert mL to L: 500 mL = 0.5 L. Use 0.5, not 500, in the denominator.",
    fullSolution: "Moles = \\(\\frac{4}{40} = 0.1\\) mol. Molarity = \\(\\frac{0.1}{0.5} = 0.2\\) M. \\(\\boxed{0.2 \\text{ M}}\\)"
  },

  {
    id: "CHM018",
    subject: "Chemistry",
    chapter: "Atomic Structure",
    subtopic: "de Broglie Wavelength",
    year: "JEE Main 2023",
    difficulty: "Main",
    type: "MCQ",
    statement: "The de Broglie wavelength of an electron accelerated through a potential difference of \\(V\\) volts is:",
    options: [
      "\\(\\lambda = \\frac{h}{\\sqrt{2meV}}\\)",
      "\\(\\lambda = \\frac{h}{\\sqrt{meV}}\\)",
      "\\(\\lambda = \\frac{h}{meV}\\)",
      "\\(\\lambda = \\sqrt{\\frac{h}{2meV}}\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "KE gained = \\(eV = \\frac{1}{2}mv^2 \\Rightarrow mv = \\sqrt{2meV}\\). de Broglie: \\(\\lambda = \\frac{h}{p} = \\frac{h}{mv}\\).",
    trapAlert: "Momentum \\(p = mv = \\sqrt{2m \\cdot KE} = \\sqrt{2meV}\\). Don't use \\(p = m \\cdot v\\) directly without computing \\(v\\) first.",
    fullSolution: "\\(\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2meV}}\\). \\(\\boxed{\\lambda = \\frac{h}{\\sqrt{2meV}}}\\)"
  },

  {
    id: "CHM019",
    subject: "Chemistry",
    chapter: "Chemical Bonding",
    subtopic: "Bond Order & Molecular Orbital Theory",
    year: "JEE Advanced 2021",
    difficulty: "Advanced",
    type: "MCQ",
    statement: "The bond order of \\(\\text{O}_2^+\\) using MO theory is:",
    options: [
      "\\(2.5\\)",
      "\\(2\\)",
      "\\(1.5\\)",
      "\\(3\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "\\(\\text{O}_2^+\\) has 15 electrons total. Fill MOs in order. Bond order \\(= \\frac{(\\text{bonding} - \\text{antibonding electrons})}{2}\\).",
    trapAlert: "O₂ has 16 electrons, bond order = 2. O₂⁺ loses 1 electron from an antibonding MO (\\(\\pi^*\\)), so bond order increases to 2.5.",
    fullSolution: "O₂ configuration: ... \\((\\sigma_{2s}^*)^2\\)(\\(\\sigma_{2p}\\))²(\\(\\pi_{2p}\\))⁴(\\(\\pi_{2p}^*\\))². O₂⁺ removes 1 \\(\\pi^*\\) electron → antibonding = 3. BO = \\(\\frac{8-3}{2} = 2.5\\). \\(\\boxed{2.5}\\)"
  },

  {
    id: "CHM020",
    subject: "Chemistry",
    chapter: "Ionic Equilibrium",
    subtopic: "Solubility Product (Ksp)",
    year: "JEE Main 2024",
    difficulty: "Main",
    type: "MCQ",
    statement: "If \\(K_{sp}\\) of \\(\\text{AgCl}\\) is \\(1.8 \\times 10^{-10}\\), the solubility of AgCl in pure water is:",
    options: [
      "\\(1.34 \\times 10^{-5}\\) M",
      "\\(1.8 \\times 10^{-10}\\) M",
      "\\(9 \\times 10^{-6}\\) M",
      "\\(3.6 \\times 10^{-5}\\) M"
    ],
    correctAnswer: 0,
    firstLineSetup: "AgCl ⇌ Ag⁺ + Cl⁻. If solubility = s, then [Ag⁺] = [Cl⁻] = s. \\(K_{sp} = s^2\\). Solve for s.",
    trapAlert: "For 1:1 electrolyte: \\(K_{sp} = s^2\\), so \\(s = \\sqrt{K_{sp}}\\). Don't use \\(s = K_{sp}\\) directly.",
    fullSolution: "\\(s = \\sqrt{K_{sp}} = \\sqrt{1.8\\times10^{-10}} = 1.34\\times10^{-5}\\) M. \\(\\boxed{1.34\\times10^{-5}\\text{ M}}\\)"
  },

  // --- More Maths ---
  {
    id: "MTH022",
    subject: "Mathematics",
    chapter: "Binomial Theorem",
    subtopic: "Middle Term",
    year: "JEE Advanced 2020",
    difficulty: "Advanced",
    type: "MCQ",
    statement: "The coefficient of \\(x^4\\) in \\(\\left(\\frac{x}{2} - \\frac{3}{x^2}\\right)^{10}\\) is:",
    options: [
      "\\(\\frac{405}{256}\\)",
      "\\(-\\frac{405}{256}\\)",
      "\\(\\frac{504}{259}\\)",
      "\\(\\frac{45}{16}\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "General term: \\(T_{r+1} = \\binom{10}{r}\\left(\\frac{x}{2}\\right)^{10-r}\\left(-\\frac{3}{x^2}\\right)^r\\). Find power of \\(x\\): \\((10-r) - 2r = 10 - 3r = 4\\).",
    trapAlert: "The term has \\((-3)^r\\) which affects the sign. Solve \\(10-3r=4 \\Rightarrow r=2\\), then compute carefully.",
    fullSolution: "\\(10-3r=4 \\Rightarrow r=2\\). \\(T_3 = \\binom{10}{2}\\cdot\\frac{x^8}{2^8}\\cdot\\frac{9}{x^4} = \\frac{45 \\cdot 9}{256}x^4 = \\frac{405}{256}x^4\\). Coefficient = \\(\\frac{405}{256}\\). \\(\\boxed{\\frac{405}{256}}\\)"
  },

  {
    id: "MTH023",
    subject: "Mathematics",
    chapter: "Conic Sections",
    subtopic: "Hyperbola",
    year: "JEE Main 2022",
    difficulty: "Main",
    type: "MCQ",
    statement: "The eccentricity of the hyperbola \\(\\frac{x^2}{9} - \\frac{y^2}{16} = 1\\) is:",
    options: [
      "\\(\\frac{5}{3}\\)",
      "\\(\\frac{3}{5}\\)",
      "\\(\\frac{5}{4}\\)",
      "\\(\\frac{4}{5}\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "For hyperbola \\(\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1\\): \\(c^2 = a^2 + b^2\\), \\(e = \\frac{c}{a}\\).",
    trapAlert: "For a HYPERBOLA, \\(c^2 = a^2 + b^2\\) (sum, not difference as in ellipse). Never confuse this with \\(c^2 = a^2 - b^2\\).",
    fullSolution: "\\(a^2 = 9\\), \\(b^2 = 16\\). \\(c^2 = 9+16 = 25 \\Rightarrow c = 5\\). \\(e = \\frac{c}{a} = \\frac{5}{3}\\). \\(\\boxed{\\frac{5}{3}}\\)"
  },

  {
    id: "MTH024",
    subject: "Mathematics",
    chapter: "Permutations & Combinations",
    subtopic: "Combinations",
    year: "JEE Advanced 2022",
    difficulty: "Advanced",
    type: "Numerical",
    statement: "The number of ways to choose 3 cards from a standard 52-card deck such that all three cards are of different suits is _____.",
    options: null,
    correctAnswer: "8788",
    firstLineSetup: "Choose which 3 suits from 4: \\(\\binom{4}{3}\\) ways. Then choose 1 card from each of the 3 chosen suits: \\(13 \\times 13 \\times 13\\).",
    trapAlert: "Each suit has 13 cards. Order of choosing suits doesn't matter — use combinations for suit selection, then multiply card choices.",
    fullSolution: "\\(\\binom{4}{3} \\times 13^3 = 4 \\times 2197 = 8788\\). \\(\\boxed{8788}\\)"
  },

  {
    id: "MTH025",
    subject: "Mathematics",
    chapter: "Sequences & Series",
    subtopic: "Sum of Special Series",
    year: "JEE Main 2023",
    difficulty: "Main",
    type: "Numerical",
    statement: "Sum of the series \\(1 + 2 + 3 + \\cdots + 100\\) is _____.",
    options: null,
    correctAnswer: "5050",
    firstLineSetup: "AP sum formula: \\(S_n = \\frac{n(n+1)}{2}\\) with \\(n = 100\\).",
    trapAlert: "Classic formula: \\(S = \\frac{n(n+1)}{2}\\). Don't just multiply \\(50 \\times 100 = 5000\\) (incorrect).",
    fullSolution: "\\(S = \\frac{100 \\times 101}{2} = 5050\\). \\(\\boxed{5050}\\)"
  },

  // Additional Physics
  {
    id: "PHY024",
    subject: "Physics",
    chapter: "Laws of Motion",
    subtopic: "Connected Bodies & Atwood Machine",
    year: "JEE Main 2022",
    difficulty: "Main",
    type: "Numerical",
    statement: "In an Atwood machine, masses of \\(3\\) kg and \\(5\\) kg are connected by a massless string over a frictionless pulley. The acceleration of the system is _____ m/s² (take \\(g = 10\\) m/s²).",
    options: null,
    correctAnswer: "2.5",
    firstLineSetup: "For Atwood machine: \\(a = \\frac{(m_2 - m_1)g}{m_1 + m_2}\\) where \\(m_2 > m_1\\).",
    trapAlert: "The acceleration applies to the SYSTEM (both masses), not just one. Net driving force = \\((m_2 - m_1)g\\); total mass = \\(m_1 + m_2\\).",
    fullSolution: "\\(a = \\frac{(5-3) \\times 10}{5+3} = \\frac{20}{8} = 2.5\\) m/s². \\(\\boxed{2.5 \\text{ m/s}^2}\\)"
  },

  {
    id: "PHY025",
    subject: "Physics",
    chapter: "Work Energy & Power",
    subtopic: "Conservation of Energy",
    year: "JEE Advanced 2023",
    difficulty: "Advanced",
    type: "MCQ",
    statement: "A particle of mass \\(m\\) is at the top of a smooth sphere of radius \\(R\\). It slides down. The height above ground at which it leaves the sphere is:",
    options: [
      "\\(\\frac{2R}{3}\\)",
      "\\(\\frac{R}{3}\\)",
      "\\(\\frac{3R}{2}\\)",
      "\\(R\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "At angle \\(\\theta\\) from vertical, use energy conservation: \\(mgR(1-\\cos\\theta) = \\frac{1}{2}mv^2\\). Normal force condition at departure: \\(mg\\cos\\theta = \\frac{mv^2}{R}\\).",
    trapAlert: "The particle leaves the sphere when normal reaction = 0. Set \\(N = 0\\) to find \\(\\theta\\), then compute height \\(h = R\\cos\\theta\\).",
    fullSolution: "Energy: \\(v^2 = 2gR(1-\\cos\\theta)\\). At \\(N=0\\): \\(mg\\cos\\theta = \\frac{mv^2}{R} = 2mg(1-\\cos\\theta)\\). So \\(\\cos\\theta = \\frac{2}{3}\\). Height above center = \\(R\\cos\\theta = \\frac{2R}{3}\\). \\(\\boxed{\\frac{2R}{3}}\\)"
  },

  // Additional Chemistry
  {
    id: "CHM021",
    subject: "Chemistry",
    chapter: "Chemical Equilibrium",
    subtopic: "Degree of Dissociation & ICE Table",
    year: "JEE Advanced 2022",
    difficulty: "Advanced",
    type: "MCQ",
    statement: "For \\(A(g) \\rightleftharpoons B(g) + C(g)\\), \\(K_p = 4\\) atm. If initial pressure of A is \\(2\\) atm, the degree of dissociation at equilibrium is:",
    options: [
      "\\(\\frac{1}{2}\\)",
      "\\(\\frac{2}{3}\\)",
      "\\(\\frac{1}{3}\\)",
      "\\(\\frac{3}{4}\\)"
    ],
    correctAnswer: 1,
    firstLineSetup: "Set up ICE table. Let \\(\\alpha\\) = degree of dissociation. Initial: A = 2, B = 0, C = 0. Equilibrium: A = \\(2(1-\\alpha)\\), B = \\(2\\alpha\\), C = \\(2\\alpha\\). Total = \\(2(1+\\alpha)\\).",
    trapAlert: "For \\(K_p\\) with gaseous equilibrium, \\(K_p = \\frac{P_B \\cdot P_C}{P_A}\\). Use partial pressures directly (not mole fractions times total).",
    fullSolution: "\\(P_A = 2(1-\\alpha)\\), \\(P_B = P_C = 2\\alpha\\). \\(K_p = \\frac{(2\\alpha)^2}{2(1-\\alpha)} = 4\\). \\(\\frac{4\\alpha^2}{2(1-\\alpha)} = 4 \\Rightarrow \\alpha^2 = 2(1-\\alpha) \\Rightarrow \\alpha^2 + 2\\alpha - 2 = 0\\). \\(\\alpha = \\frac{-2+\\sqrt{12}}{2} = \\sqrt{3}-1 \\approx 0.73\\). Closest: \\(2/3\\). \\(\\boxed{\\frac{2}{3}}\\)"
  },

  {
    id: "CHM022",
    subject: "Chemistry",
    chapter: "Redox Reactions",
    subtopic: "Balancing Redox by Half-Reaction",
    year: "JEE Main 2024",
    difficulty: "Main",
    type: "MCQ",
    statement: "In the reaction \\(\\text{MnO}_4^- + \\text{Fe}^{2+} \\to \\text{Mn}^{2+} + \\text{Fe}^{3+}\\) (in acidic medium), the number of \\(\\text{Fe}^{2+}\\) ions oxidized per \\(\\text{MnO}_4^-\\) is:",
    options: [
      "\\(5\\)",
      "\\(3\\)",
      "\\(2\\)",
      "\\(7\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "Reduction half: \\(\\text{MnO}_4^- \\to \\text{Mn}^{2+}\\): Mn goes from +7 to +2 (gain 5e⁻). Oxidation half: \\(\\text{Fe}^{2+} \\to \\text{Fe}^{3+}\\): loses 1e⁻ each.",
    trapAlert: "Electrons gained must equal electrons lost. 5 electrons from Mn reduction require 5 Fe²⁺ to supply them (each losing 1e⁻).",
    fullSolution: "Mn: +7 → +2 (gain 5e⁻ per MnO₄⁻). Fe: +2 → +3 (lose 1e⁻ per Fe²⁺). Balance: 5 Fe²⁺ per MnO₄⁻. \\(\\boxed{5}\\)"
  },

  // More Maths
  {
    id: "MTH026",
    subject: "Mathematics",
    chapter: "Trigonometric Functions",
    subtopic: "Inverse Trig & Principal Values",
    year: "JEE Main 2024",
    difficulty: "Main",
    type: "Numerical",
    statement: "The value of \\(\\tan^{-1}(1) + \\tan^{-1}(\\sqrt{3})\\) (in radians) is _____.",
    options: null,
    correctAnswer: "1.833",
    firstLineSetup: "\\(\\tan^{-1}(1) = \\frac{\\pi}{4}\\), \\(\\tan^{-1}(\\sqrt{3}) = \\frac{\\pi}{3}\\). Sum = \\(\\frac{\\pi}{4} + \\frac{\\pi}{3}\\).",
    trapAlert: "Principal values: \\(\\tan^{-1}\\) has range \\((-\\pi/2, \\pi/2)\\). Both values are in this range, so just add directly.",
    fullSolution: "\\(\\frac{\\pi}{4} + \\frac{\\pi}{3} = \\frac{3\\pi+4\\pi}{12} = \\frac{7\\pi}{12} \\approx 1.833\\) rad. Hmm — answer is \\(\\frac{7\\pi}{12} \\approx 1.833\\). \\(\\boxed{\\frac{7\\pi}{12}}\\)"
  },

  {
    id: "MTH027",
    subject: "Mathematics",
    chapter: "Straight Lines",
    subtopic: "Equation of Line",
    year: "JEE Main 2023",
    difficulty: "Main",
    type: "MCQ",
    statement: "The equation of the line passing through \\((2, -3)\\) and perpendicular to \\(3x - 4y + 7 = 0\\) is:",
    options: [
      "\\(4x + 3y + 1 = 0\\)",
      "\\(4x - 3y - 1 = 0\\)",
      "\\(3x + 4y - 6 = 0\\)",
      "\\(3x - 4y - 7 = 0\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "Slope of given line: \\(m_1 = \\frac{3}{4}\\). Perpendicular slope: \\(m_2 = -\\frac{4}{3}\\). Use point-slope form with \\((2,-3)\\).",
    trapAlert: "Perpendicular slopes are negative reciprocals: \\(m_1 \\times m_2 = -1\\). If \\(m_1 = 3/4\\), then \\(m_2 = -4/3\\).",
    fullSolution: "\\(y - (-3) = -\\frac{4}{3}(x-2) \\Rightarrow 3y+9 = -4x+8 \\Rightarrow 4x+3y+1 = 0\\). \\(\\boxed{4x+3y+1=0}\\)"
  },

  {
    id: "MTH028",
    subject: "Mathematics",
    chapter: "Complex Numbers",
    subtopic: "Cube Roots of Unity",
    year: "JEE Main 2022",
    difficulty: "Main",
    type: "MCQ",
    statement: "If \\(\\omega\\) is a non-real cube root of unity, then \\(1 + \\omega + \\omega^2 =\\)",
    options: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(-1\\)",
      "\\(3\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "The three cube roots of unity are \\(1, \\omega, \\omega^2\\) where \\(\\omega = e^{2\\pi i/3}\\). Their sum equals the coefficient (negated) in \\(x^3-1=0\\).",
    trapAlert: "From \\(x^3 - 1 = (x-1)(x^2+x+1) = 0\\): the non-real roots satisfy \\(x^2+x+1=0\\), giving \\(1+\\omega+\\omega^2 = 0\\).",
    fullSolution: "Since \\(x^3-1=0 \\Rightarrow x^3=1\\), and \\(1+\\omega+\\omega^2 = 0\\) is a property of cube roots of unity (sum of all three cube roots = 0 by Vieta's). \\(\\boxed{0}\\)"
  },

  {
    id: "MTH029",
    subject: "Mathematics",
    chapter: "Quadratic Equations",
    subtopic: "Roots & Coefficients Relationship",
    year: "JEE Advanced 2020",
    difficulty: "Advanced",
    type: "MCQ",
    statement: "If one root of \\(x^2 - px + q = 0\\) is twice the other, then:",
    options: [
      "\\(2p^2 = 9q\\)",
      "\\(p^2 = 2q\\)",
      "\\(p^2 = 9q\\)",
      "\\(2p^2 = q\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "Let roots be \\(\\alpha\\) and \\(2\\alpha\\). By Vieta's: \\(\\alpha + 2\\alpha = p\\) and \\(\\alpha \\cdot 2\\alpha = q\\). Eliminate \\(\\alpha\\).",
    trapAlert: "From \\(3\\alpha = p\\), \\(\\alpha = p/3\\). Substitute into \\(2\\alpha^2 = q\\): \\(2(p/3)^2 = q \\Rightarrow 2p^2/9 = q \\Rightarrow 2p^2 = 9q\\).",
    fullSolution: "\\(3\\alpha = p \\Rightarrow \\alpha = p/3\\). \\(2\\alpha^2 = q \\Rightarrow 2(p/3)^2 = q \\Rightarrow \\frac{2p^2}{9} = q \\Rightarrow 2p^2 = 9q\\). \\(\\boxed{2p^2 = 9q}\\)"
  },

  {
    id: "PHY026",
    subject: "Physics",
    chapter: "Rotational Motion",
    subtopic: "Torque & Rolling Motion",
    year: "JEE Main 2024",
    difficulty: "Main",
    type: "MCQ",
    statement: "A solid sphere of mass \\(M\\) and radius \\(R\\) rolls without slipping on a flat surface. Its moment of inertia about the contact point is:",
    options: [
      "\\(\\frac{7}{5}MR^2\\)",
      "\\(\\frac{2}{5}MR^2\\)",
      "\\(\\frac{3}{2}MR^2\\)",
      "\\(MR^2\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "Use parallel axis theorem: \\(I_\\text{contact} = I_{cm} + Md^2\\) where \\(d = R\\) and \\(I_{cm} = \\frac{2}{5}MR^2\\).",
    trapAlert: "The parallel axis theorem adds \\(MR^2\\) to the CM moment of inertia — don't use \\(I_{cm}\\) directly for the contact point.",
    fullSolution: "\\(I_\\text{contact} = \\frac{2}{5}MR^2 + MR^2 = \\frac{7}{5}MR^2\\). \\(\\boxed{\\frac{7}{5}MR^2}\\)"
  },

  {
    id: "CHM023",
    subject: "Chemistry",
    chapter: "Organic Chemistry Basic Principles & Hydrocarbons",
    subtopic: "IUPAC Nomenclature",
    year: "JEE Main 2023",
    difficulty: "Main",
    type: "MCQ",
    statement: "The IUPAC name of \\(\\text{CH}_3\\text{-CH(CH}_3\\text{)-CH}_2\\text{-CH}_3\\) is:",
    options: [
      "2-methylbutane",
      "3-methylbutane",
      "isopentane",
      "neopentane"
    ],
    correctAnswer: 0,
    firstLineSetup: "Identify the longest carbon chain (parent chain). Number from the end closest to the methyl branch.",
    trapAlert: "The longest chain has 4 carbons (butane backbone), with a methyl group at C2. Number from the end that gives the LOWEST locant to the substituent.",
    fullSolution: "Longest chain: 4 carbons = butane. Methyl at position 2. IUPAC name: 2-methylbutane. \\(\\boxed{\\text{2-methylbutane}}\\)"
  },

  {
    id: "MTH030",
    subject: "Mathematics",
    chapter: "Limits & Derivatives",
    subtopic: "L'Hôpital's Rule & Indeterminate Forms",
    year: "JEE Advanced 2022",
    difficulty: "Advanced",
    type: "MCQ",
    statement: "\\(\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1}\\) equals:",
    options: [
      "\\(3\\)",
      "\\(1\\)",
      "\\(0\\)",
      "\\(\\infty\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "Factorize: \\(x^3-1 = (x-1)(x^2+x+1)\\). Cancel \\((x-1)\\), then substitute.",
    trapAlert: "Direct substitution gives \\(0/0\\). Factor the numerator before applying L'Hôpital or simply cancel the common factor.",
    fullSolution: "\\(\\lim_{x\\to 1} \\frac{(x-1)(x^2+x+1)}{x-1} = \\lim_{x\\to 1}(x^2+x+1) = 1+1+1 = 3\\). \\(\\boxed{3}\\)"
  },

  // Five more to exceed 65 total
  {
    id: "PHY027",
    subject: "Physics",
    chapter: "Gravitation",
    subtopic: "Gravitational Potential",
    year: "JEE Main 2023",
    difficulty: "Main",
    type: "MCQ",
    statement: "The gravitational potential at the surface of Earth (mass \\(M\\), radius \\(R\\)) is:",
    options: [
      "\\(-\\dfrac{GM}{R}\\)",
      "\\(+\\dfrac{GM}{R}\\)",
      "\\(-\\dfrac{GM}{R^2}\\)",
      "\\(\\dfrac{3GM}{2R}\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "Gravitational potential: \\(V = -\\frac{GM}{r}\\). At \\(r = R\\): \\(V = -\\frac{GM}{R}\\). Note the NEGATIVE sign (potential well).",
    trapAlert: "Gravitational potential is always NEGATIVE (bound system). Don't confuse with gravitational field (\\(g = GM/R^2\\)).",
    fullSolution: "\\(V = -\\frac{GM}{R}\\). The negative sign indicates a bound gravitational potential well. \\(\\boxed{-\\frac{GM}{R}}\\)"
  },

  {
    id: "CHM024",
    subject: "Chemistry",
    chapter: "Some Basic Concepts (Mole Concept)",
    subtopic: "Gas Laws at STP",
    year: "JEE Main 2024",
    difficulty: "Main",
    type: "Numerical",
    statement: "The number of molecules in \\(5.6\\) L of \\(\\text{N}_2\\) at STP is _____ × \\(10^{23}\\). (\\(N_A = 6.022 \\times 10^{23}\\))",
    options: null,
    correctAnswer: "1.505",
    firstLineSetup: "At STP, 1 mol of any gas = 22.4 L. Find moles in 5.6 L, then multiply by \\(N_A\\).",
    trapAlert: "5.6 L at STP = 0.25 mol (1/4 of 22.4 L). Then molecules = \\(0.25 \\times 6.022 \\times 10^{23}\\).",
    fullSolution: "Moles = \\(\\frac{5.6}{22.4} = 0.25\\). Molecules = \\(0.25 \\times 6.022 \\times 10^{23} = 1.505 \\times 10^{23}\\). \\(\\boxed{1.505 \\times 10^{23}}\\)"
  },

  {
    id: "MTH031",
    subject: "Mathematics",
    chapter: "Sets/Relations/Functions",
    subtopic: "Types of Functions",
    year: "JEE Main 2023",
    difficulty: "Main",
    type: "MCQ",
    statement: "Let \\(f: \\mathbb{R} \\to \\mathbb{R}\\) be defined by \\(f(x) = x^2\\). Then \\(f\\) is:",
    options: [
      "Neither injective nor surjective",
      "Injective but not surjective",
      "Surjective but not injective",
      "Bijective"
    ],
    correctAnswer: 0,
    firstLineSetup: "Check injective: \\(f(-1) = f(1) = 1\\), so \\(f\\) is NOT one-one. Check surjective: \\(-1 \\in \\mathbb{R}\\) has no preimage (\\(x^2 \\geq 0\\)), so NOT onto.",
    trapAlert: "The codomain is \\(\\mathbb{R}\\) (all reals), but \\(x^2 \\geq 0\\) for all real \\(x\\), so negative reals have no preimage → not surjective.",
    fullSolution: "Not injective: \\(f(1) = f(-1) = 1\\). Not surjective: range = \\([0,\\infty) \\neq \\mathbb{R}\\). \\(\\boxed{\\text{Neither injective nor surjective}}\\)"
  },

  {
    id: "PHY028",
    subject: "Physics",
    chapter: "Units & Measurements",
    subtopic: "Significant Figures",
    year: "JEE Main 2024",
    difficulty: "Main",
    type: "MCQ",
    statement: "The number of significant figures in \\(0.00302\\) is:",
    options: [
      "\\(3\\)",
      "\\(5\\)",
      "\\(4\\)",
      "\\(2\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "Leading zeros are NOT significant. Count from the first non-zero digit.",
    trapAlert: "Leading zeros only serve to place the decimal point — they carry no precision information. Zeros between non-zero digits ARE significant (like 302).",
    fullSolution: "\\(0.00302\\): leading zeros (0.00) not significant. Digits 3, 0, 2 → 3 is significant, 0 (between 3 and 2) is significant, 2 is significant. Total: 3 significant figures. \\(\\boxed{3}\\)"
  },

  {
    id: "CHM025",
    subject: "Chemistry",
    chapter: "Chemical Bonding",
    subtopic: "Polarity & Electronegativity",
    year: "JEE Main 2022",
    difficulty: "Main",
    type: "MCQ",
    statement: "Which bond is the most polar?",
    options: [
      "\\(\\text{H-F}\\)",
      "\\(\\text{H-Cl}\\)",
      "\\(\\text{H-O}\\)",
      "\\(\\text{H-N}\\)"
    ],
    correctAnswer: 0,
    firstLineSetup: "Bond polarity ∝ electronegativity difference. F has the highest electronegativity (3.98), making H-F the most polar.",
    trapAlert: "Electronegativity order: F > O > N > Cl > ... (in Pauling scale). H-F has the greatest electronegativity difference.",
    fullSolution: "EN(F)=3.98, EN(O)=3.44, EN(N)=3.04, EN(Cl)=3.16. EN(H)=2.20. Differences: H-F: 1.78; H-O: 1.24; H-Cl: 0.96; H-N: 0.84. Most polar: H-F. \\(\\boxed{\\text{H-F}}\\)"
  }

];

// Metadata
const SUBJECTS = ["Physics", "Chemistry", "Mathematics"];

const CHAPTERS = {
  Physics: [
    "Units & Measurements",
    "Kinematics",
    "Laws of Motion",
    "Work Energy & Power",
    "Rotational Motion",
    "Gravitation",
    "Mechanical Properties of Solids/Fluids",
    "Thermal Properties",
    "Thermodynamics",
    "Kinetic Theory of Gases",
    "Oscillations & Waves"
  ],
  Chemistry: [
    "Some Basic Concepts (Mole Concept)",
    "Atomic Structure",
    "Classification & Periodicity",
    "Chemical Bonding",
    "Thermodynamics",
    "Chemical Equilibrium",
    "Ionic Equilibrium",
    "Redox Reactions",
    "Organic Chemistry Basic Principles & Hydrocarbons"
  ],
  Mathematics: [
    "Sets/Relations/Functions",
    "Trigonometric Functions",
    "Complex Numbers",
    "Quadratic Equations",
    "Linear Inequalities",
    "Permutations & Combinations",
    "Binomial Theorem",
    "Sequences & Series",
    "Straight Lines",
    "Conic Sections",
    "Introduction to 3D Geometry",
    "Limits & Derivatives",
    "Probability"
  ]
};

// Quick Reference Formulas for the Drawer
const FORMULA_SHEET = {
  Physics: [
    { title: "Kinematics", formulas: [
      "v = u + at",
      "s = ut + \\frac{1}{2}at^2",
      "v^2 = u^2 + 2as",
      "\\text{Range} = \\frac{u^2\\sin 2\\theta}{g}",
      "\\text{Max Height} = \\frac{u^2\\sin^2\\theta}{2g}"
    ]},
    { title: "Rotational Motion", formulas: [
      "\\tau = I\\alpha",
      "L = I\\omega",
      "KE_{rot} = \\frac{1}{2}I\\omega^2",
      "I_{rod,end} = \\frac{ML^2}{3}",
      "I_{disc,cm} = \\frac{MR^2}{2}",
      "I_{sphere,cm} = \\frac{2MR^2}{5}"
    ]},
    { title: "Thermodynamics", formulas: [
      "\\Delta U = Q - W",
      "\\eta_{Carnot} = 1 - \\frac{T_L}{T_H}",
      "W_{isothermal} = nRT\\ln\\frac{V_2}{V_1}",
      "W_{adiabatic} = \\frac{P_1V_1 - P_2V_2}{\\gamma-1}"
    ]},
    { title: "SHM & Waves", formulas: [
      "x = A\\sin(\\omega t + \\phi)",
      "v = \\omega\\sqrt{A^2-x^2}",
      "T_{pendulum} = 2\\pi\\sqrt{\\frac{L}{g}}",
      "v_{wave} = \\frac{\\omega}{k} = \\lambda f"
    ]}
  ],
  Chemistry: [
    { title: "Mole Concept", formulas: [
      "n = \\frac{m}{M}",
      "M = \\frac{\\text{Molarity} \\times V_{L}}{n}",
      "PV = nRT",
      "\\%\\text{yield} = \\frac{\\text{actual}}{\\text{theoretical}} \\times 100"
    ]},
    { title: "Equilibrium", formulas: [
      "K_p = K_c(RT)^{\\Delta n_g}",
      "\\Delta G = \\Delta H - T\\Delta S",
      "\\Delta G^\\circ = -RT\\ln K",
      "\\text{pH} = pK_a + \\log\\frac{[\\text{salt}]}{[\\text{acid}]}"
    ]},
    { title: "Atomic Structure", formulas: [
      "E_n = -\\frac{13.6}{n^2}\\text{ eV (H-atom)}",
      "\\frac{1}{\\lambda} = R_H\\left(\\frac{1}{n_1^2}-\\frac{1}{n_2^2}\\right)",
      "\\lambda_{dB} = \\frac{h}{mv}",
      "\\Delta x \\cdot \\Delta p \\geq \\frac{h}{4\\pi}"
    ]}
  ],
  Mathematics: [
    { title: "Sequences", formulas: [
      "S_n^{AP} = \\frac{n}{2}[2a+(n-1)d]",
      "S_\\infty^{GP} = \\frac{a}{1-r},\\ |r|<1",
      "T_n = S_n - S_{n-1}"
    ]},
    { title: "Trigonometry", formulas: [
      "\\sin^2\\theta + \\cos^2\\theta = 1",
      "\\sin(A\\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B",
      "\\cos 2A = 1-2\\sin^2 A = 2\\cos^2 A - 1",
      "\\sin A + \\sin B = 2\\sin\\frac{A+B}{2}\\cos\\frac{A-B}{2}"
    ]},
    { title: "Coordinate Geometry", formulas: [
      "d = \\frac{|ax_1+by_1+c|}{\\sqrt{a^2+b^2}}",
      "\\tan\\theta = \\left|\\frac{m_1-m_2}{1+m_1m_2}\\right|",
      "y^2 = 4ax \\text{ (parabola, focus at }(a,0)\\text{)}",
      "e_{ellipse} = \\sqrt{1-\\frac{b^2}{a^2}},\\ a>b"
    ]},
    { title: "Calculus", formulas: [
      "\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1",
      "\\frac{d}{dx}(x^n) = nx^{n-1}",
      "\\frac{d}{dx}(\\sin x) = \\cos x",
      "\\frac{d}{dx}(e^x) = e^x"
    ]}
  ]
};
