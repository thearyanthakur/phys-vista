export const machines = [
  {
    id: 'car',
    name: 'Car',
    category: 'Mobility Systems',
    tagline: 'Track how fuel, force, gears, and wheels become smooth road motion.',
    intro:
      'A car is a coordinated machine made of power generation, torque transfer, steering, suspension, and braking systems.',
    summary:
      'This lesson helps students understand how energy becomes motion, why gears matter, and how the rest of the vehicle keeps that motion controlled.',
    lessonTitle: 'How a Car Engine Works',
    videoId: 'ZQvfHyfgBtA',
    sourceKind: 'video',
    sourceLabel: 'Open verified Animagraffs lesson',
    sourceUrl: 'https://www.youtube.com/watch?v=ZQvfHyfgBtA',
    searchQuery: 'Animagraffs How a Car Engine Works',
    duration: '12 min lesson',
    level: 'Middle school to college',
    focusLabel: 'Energy to motion',
    misconception:
      'Students often think the engine alone explains the whole car. In practice, the drivetrain, steering, suspension, and brakes are just as important to how the machine behaves.',
    studyChecklist: [
      'Identify the four-stroke cycle before moving to the larger engine layout.',
      'Follow torque from the crankshaft into the transmission and wheels.',
      'Separate the motion system from the control and safety systems.',
    ],
    outcomes: ['Engine cycle', 'Transmission flow', 'Steering and braking'],
    systems: [
      { title: 'Engine', description: 'Combustion pushes pistons and spins the crankshaft.' },
      { title: 'Drivetrain', description: 'The gearbox and differential transfer torque to the wheels.' },
      { title: 'Control systems', description: 'Steering, brakes, and suspension keep the car stable and responsive.' },
    ],
    visualExplainers: [
      'Watch the handoff from piston motion to rotation.',
      'Notice where rotational speed changes in the drivetrain.',
      'Compare what makes the car move with what keeps it safe.',
    ],
    summarySections: [
      {
        title: 'The Heart of the Engine: The Four-Stroke Cycle',
        text:
          'The main job of a car engine is to turn fuel into movement inside the cylinders. It does this with pistons, the core power-producing parts of the engine. Power comes from a repeating four-stroke cycle: intake pulls in air and fuel, compression squeezes that mixture tightly, the power stroke ignites it with a spark and forces the piston downward, and exhaust pushes the burnt gases out. In a multi-cylinder engine, pistons fire in a carefully planned order so power delivery stays smooth instead of jerky.',
      },
      {
        title: 'The Main Moving Parts',
        text:
          'Several heavy-duty parts must stay perfectly synchronized for the four-stroke cycle to work. Connecting rods link each piston to the crankshaft, which converts the pistons up-and-down motion into spinning motion. Camshafts use specially shaped cams to open and close the intake and exhaust valves at the correct time. A timing belt, chain, or gear set keeps the camshafts and crankshaft in sync. The engine block and cylinder head form the structural body of the engine, while the flywheel connects engine power to the transmission and also helps the starter motor begin turning the engine.',
      },
      {
        title: "Air and Fuel System: The Engine's Food",
        text:
          'The engine needs a steady supply of clean air and correctly delivered fuel. Air enters through the intake system and passes into the intake manifold, while a fuel pump moves gasoline from the tank through a filter toward the engine. Fuel injectors then spray a carefully timed mist of fuel so it can mix properly with the incoming air. This mixture is what the engine compresses and burns to produce power.',
      },
      {
        title: "Electrical System: The Engine's Brain and Spark",
        text:
          'Modern engines depend on electronics to run well. The Engine Control Module acts like the control brain, managing spark timing, fuel delivery, and other operating decisions. Coil packs send electrical energy to the spark plugs, which create the spark that ignites the compressed air-fuel mixture. The battery provides the initial power needed to start the engine, and once the engine is running, the alternator generates electricity to recharge the battery and power the vehicle systems.',
      },
      {
        title: 'Cooling and Oil Systems',
        text:
          'Engines generate enormous heat and friction, so they need separate systems to survive continuous operation. The cooling system circulates coolant around the cylinders to absorb heat, with the water pump keeping flow moving, the thermostat controlling temperature, and the radiator releasing heat to the outside air. The oil system lubricates moving parts, reduces friction, helps carry away heat, and traps dirt through the oil filter. Oil is pushed through internal oil galleries, while piston rings help keep oil out of the combustion chamber.',
      },
      {
        title: 'Exhaust System and Final Flow',
        text:
          'After combustion, burnt gases must leave the engine efficiently. The exhaust manifold gathers gases from the cylinders and routes them into the exhaust pipe. The catalytic converter acts like a chemical cleaning unit that reduces harmful emissions, and the muffler lowers engine noise before gases leave through the tailpipe. When viewed as one complete machine, the car engine is a tightly coordinated system that breathes in air and fuel, burns them for power, manages heat and friction, and safely removes waste gases.',
      },
    ],
    quickPrompts: [
      'Explain why a gearbox helps a car start moving.',
      'What is the difference between torque and speed here?',
      'Teach this as if I am in grade 8.',
    ],
  },
  {
    id: 'aeroplane',
    name: 'Aeroplane',
    category: 'Flight Systems',
    tagline: 'See lift, thrust, balance, and control surfaces as one system.',
    intro:
      'An aeroplane flies only when lift, thrust, drag, weight, and control surfaces stay in balance.',
    summary:
      'Students can connect airflow, wing shape, jet propulsion, and aircraft stability in one clear sequence.',
    lessonTitle: 'Aeroplane lesson',
    videoId: 'NZLbTuBDhJg',
    sourceKind: 'video',
    sourceLabel: 'Open verified Animagraffs lesson',
    sourceUrl: 'https://youtu.be/NZLbTuBDhJg?si=Z6LfXZMVkUlx4-Qw',
    searchQuery: 'NZLbTuBDhJg',
    duration: '11 min lesson',
    level: 'Grade 8 to college foundation',
    focusLabel: 'Lift and control',
    misconception:
      'Students often reduce flight to "wings make lift." The full story requires airflow, thrust, drag, weight, and active control surfaces working together.',
    studyChecklist: [
      'Track the four forces before diving into any single aircraft part.',
      'Notice how the engine supports flight indirectly by sustaining forward speed.',
      'Watch how control surfaces change pitch, roll, and yaw separately.',
    ],
    outcomes: ['Wing lift', 'Jet propulsion', 'Pitch, roll, yaw'],
    systems: [
      { title: 'Wings', description: 'Wing shape and airflow produce lift.' },
      { title: 'Engine', description: 'The engine accelerates air backward to create thrust.' },
      { title: 'Control surfaces', description: 'Ailerons, elevator, and rudder adjust flight direction and stability.' },
    ],
    visualExplainers: [
      'Track the air through the engine from intake to exhaust.',
      'Relate forward speed to the lift created over the wings.',
      'Observe how small flap changes affect the whole aircraft.',
    ],
    summarySections: [
      {
        title: 'The Skeleton and Skin: The Airframe',
        text:
          'The body of a jet airliner is designed to be extremely strong while still staying as light as possible. Its internal airframe acts like a skeleton built from frames, longerons, and stringers, while the outer skin is made from many riveted panels of aluminum and advanced composite materials. Because outside air pressure at cruising altitude is far too low for people to survive, the passenger cabin, cockpit, and cargo spaces are sealed and pressurized, with strong pressure bulkheads separating safe pressurized areas from unpressurized sections.',
      },
      {
        title: 'Steering the Plane: Wings and Flight Controls',
        text:
          'The wings generate lift, but pilots steer the aircraft using flight control surfaces built into the wings and tail. Ailerons on the rear edge of the wings move in opposite directions to roll the aircraft. Elevators on the horizontal tail push the nose up or down, while the rudder on the vertical tail turns the nose left or right. Flaps and slats extend from the wings to reshape them for takeoff and landing, increasing lift at slower speeds and helping prevent stalls. Spoilers rise from the top of the wings to destroy lift during landing so the aircraft settles firmly onto the runway.',
      },
      {
        title: 'Power and Braking: Engines and Landing Gear',
        text:
          'The main jet engines provide the forward thrust needed for flight, but they also help slow the plane down after landing. Many aircraft use thrust reversers, which redirect engine thrust forward to act like a huge air brake. The APU, or Auxiliary Power Unit, is a small backup engine usually hidden in the tail. It powers cabin systems and helps start the main engines while the aircraft is on the ground. The landing gear folds into the aircraft during flight and lowers for takeoff and landing, with oil-and-gas shock struts absorbing impact. The wheels use powerful brakes, and special fuse plugs in the tires help prevent dangerous tire explosions if overheating occurs.',
      },
      {
        title: 'Air Management: Breathing, Heating, and Anti-Ice',
        text:
          'Modern airliners manage air very carefully. To pressurize the cabin, the plane takes hot, compressed air from inside the engines, called bleed air, and cools it before sending it into the cabin. That same hot air is also routed through parts of the wings and engine coverings to melt dangerous ice. Even the cockpit windows are heated so they stay clear and do not fog up.',
      },
      {
        title: 'Fuel and Hydraulic Systems',
        text:
          'The center body and wings of the aircraft often act as giant fuel tanks. Because fuel vapor can be dangerous, the aircraft pumps nitrogen-rich air into the tanks as fuel is used so fire risk stays low. Fuel is moved toward the engines using specialized pumping systems. Hydraulics power the heavy mechanical parts of the plane, including landing gear, flaps, slats, spoilers, and some flight controls. Airliners often use multiple independent hydraulic systems so that if one fails, the others can still keep the aircraft controllable.',
      },
      {
        title: 'Emergency Systems',
        text:
          'Airliners also include backup systems for rare but serious failures. If the aircraft loses major electrical power, a small device called a Ram Air Turbine can drop into the airflow and act like a tiny windmill to produce emergency power. If cabin pressure is lost, oxygen masks drop automatically and provide short-term breathing support for passengers. For evacuation on the ground, the doors are fitted with inflatable escape slides that deploy when the doors are armed and opened.',
      },
      {
        title: 'The Big Picture',
        text:
          'A jet airliner is much more than wings and engines. It is a tightly coordinated machine made of structure, pressure systems, flight controls, propulsion, hydraulics, fuel management, anti-ice systems, landing gear, and emergency backups. Students understand airplanes best when they see them as layered engineering systems designed to keep people safe, stable, and comfortable while moving at high speed through thin air.',
      },
    ],
    quickPrompts: [
      'Why does an aeroplane need speed before takeoff?',
      'Compare lift and thrust in simple terms.',
      'What would happen if the rudder stopped working?',
    ],
  },
  {
    id: 'pulley',
    name: 'Levers, Pulleys and Gears',
    category: 'Force Multipliers',
    tagline: 'Understand mechanical advantage through ropes, wheels, and load sharing.',
    intro:
      'Pulleys make force easier to manage by changing direction and by sharing a load across multiple rope segments.',
    summary:
      'This module shows the tradeoff between force and distance and explains why pulleys are used in cranes, rescue systems, and lifting tools.',
    lessonTitle: 'Pulley system overview',
    videoId: 'JnYVz1TSmBQ',
    sourceKind: 'video',
    sourceLabel: 'Open pulley lesson',
    sourceUrl: 'https://www.youtube.com/watch?v=JnYVz1TSmBQ',
    searchQuery: 'JnYVz1TSmBQ',
    duration: '8 min lesson',
    level: 'Upper primary to high school',
    focusLabel: 'Mechanical advantage',
    misconception:
      'A pulley does not make work disappear. It lowers the effort force by increasing the distance over which that force must be applied.',
    studyChecklist: [
      'Count supporting rope segments, not just the number of wheels.',
      'Compare ideal mechanical advantage with real friction losses.',
      'Link the diagram to cranes, gym machines, and rescue lifting tools.',
    ],
    outcomes: ['Load sharing', 'Force-distance tradeoff', 'Practical rigging'],
    systems: [
      { title: 'Fixed pulley', description: 'Changes the direction of the applied force.' },
      { title: 'Movable pulley', description: 'Reduces effort by splitting the load across rope segments.' },
      { title: 'Block and tackle', description: 'Combines pulleys for larger mechanical advantage.' },
    ],
    visualExplainers: [
      'Count the rope segments supporting the load.',
      'Notice that smaller effort requires pulling more rope.',
      'Relate the idea to cranes and gym machines.',
    ],
    summarySections: [
      {
        title: 'The Main Idea Behind Pulleys',
        text:
          'A pulley system helps a person lift or move a load more easily by changing how force is applied. It does not create extra energy. Instead, it trades force for distance. If a system reduces the effort force needed to lift something, the person must usually pull more rope to move the load the same height.',
      },
      {
        title: 'Fixed and Movable Pulleys',
        text:
          'A fixed pulley is attached in place and mainly changes the direction of force. This can make lifting feel more convenient, because pulling downward is often easier than lifting upward. A movable pulley is attached to the load itself and reduces the force needed by allowing multiple rope segments to share the weight.',
      },
      {
        title: 'Mechanical Advantage and Rope Segments',
        text:
          'Mechanical advantage depends on how many rope sections directly support the load. If two rope segments support the load, each segment carries part of the weight, so the person pulling does less force than lifting the full load directly. This is why students should count supporting rope segments rather than just counting wheels.',
      },
      {
        title: 'Why More Help Means More Pulling',
        text:
          'The tradeoff in pulley systems is simple: less force means more rope movement. If the load rises by one meter, the person may have to pull two, three, or more meters of rope depending on the setup. This is a direct result of energy conservation and is the reason pulley systems feel easier but not magical.',
      },
      {
        title: 'Real-World Losses and Friction',
        text:
          'Real pulley systems are never perfectly efficient. Friction between the rope and pulley wheel, bending of the rope, and the weight of components themselves all increase the effort needed. That means the actual force required is usually larger than the ideal classroom calculation.',
      },
      {
        title: 'Why Pulleys Matter in Real Machines',
        text:
          'Pulleys appear in cranes, elevators, rescue equipment, gym machines, theater rigging, and ship systems because they let people and motors manage heavy loads more safely. The real value of learning pulleys is understanding force distribution, work, and mechanical advantage in practical systems.',
      },
    ],
    quickPrompts: [
      'Explain mechanical advantage with one simple example.',
      'Why do I pull more rope when the force gets smaller?',
      'Can you solve a pulley problem step by step?',
    ],
  },
  {
    id: 'crane',
    name: 'Crane',
    category: 'Construction Machines',
    tagline: 'Learn how lifting, balance, pulleys, and counterweights work together.',
    intro:
      'A crane is a live demonstration of torque, structural support, counterbalance, and controlled lifting.',
    summary:
      'Students can see how the boom, hoist, pulley system, and counterweight cooperate to lift safely without tipping.',
    lessonTitle: 'Tower crane lesson',
    videoId: 'xV6kCOYu74w',
    sourceKind: 'video',
    sourceLabel: 'Open tower crane lesson',
    sourceUrl: 'https://youtu.be/xV6kCOYu74w?si=tzGz3cjVwwHMPsfg',
    searchQuery: 'xV6kCOYu74w',
    duration: '10 min lesson',
    level: 'High school and beyond',
    focusLabel: 'Torque and stability',
    misconception:
      'The crane is not just a tall lifting arm. It is a torque-balancing machine whose safety depends on geometry, support base, and counterweight design.',
    studyChecklist: [
      'Compare the load moment and the resisting counterweight moment.',
      'Notice how pulleys reduce hoist effort but do not remove the torque problem.',
      'Track how reach changes stability even before the load changes.',
    ],
    outcomes: ['Counterweight logic', 'Boom geometry', 'Safe lifting'],
    systems: [
      { title: 'Boom', description: 'The boom positions the load and handles bending forces.' },
      { title: 'Hoist system', description: 'Cable and pulleys raise or lower the load with control.' },
      { title: 'Counterbalance', description: 'Counterweights and outriggers resist tipping torque.' },
    ],
    visualExplainers: [
      'Compare the load torque and counterweight torque.',
      'Watch how pulleys help the hoist lift heavy mass.',
      'Notice how longer reach increases tipping risk.',
    ],
    summarySections: [
      {
        title: 'Why Cranes Are Really Torque Machines',
        text:
          'A crane is designed to lift large masses by managing torque around its base. When a heavy load is lifted far away from the center of support, it creates a strong turning effect. If that turning effect becomes too large, the crane can tip. This is why distance from the base matters just as much as the weight of the load itself.',
      },
      {
        title: 'Boom, Jib, and Structural Reach',
        text:
          'The boom and jib position the load at the required height and distance. These long structural members must be strong enough to resist bending while still allowing the crane to reach difficult locations. A longer reach can make the crane more useful, but it also increases torque and creates greater tipping risk.',
      },
      {
        title: 'Counterweights and Outriggers',
        text:
          'Counterweights help balance the load by placing large mass on the opposite side of the crane. Outriggers widen the effective support base, making the crane more stable. Together, these systems keep the center of mass in a safe region so the crane can lift without falling over.',
      },
      {
        title: 'Cable, Hoist, and Pulley System',
        text:
          'The hoist system uses cables, drums, and pulleys to raise and lower loads. Pulleys help reduce the force needed at each rope segment, making it possible to lift heavier loads more smoothly. However, pulleys do not remove the torque problem; they only help manage the lifting force itself.',
      },
      {
        title: 'Precision, Control, and Safety',
        text:
          'Crane operation is not only about strength. It also requires precision control because swinging loads, wind, poor ground support, or sudden movement can all create dangerous instability. Operators must account for load charts, reach limits, ground conditions, and the dynamic motion of the lifted object.',
      },
      {
        title: 'The Big Picture',
        text:
          'A crane is a complete lifting system made of structure, counterbalance, pulleys, motors, and safety controls. Students understand cranes best when they see them not as giant hooks, but as carefully balanced torque-management machines.',
      },
    ],
    quickPrompts: [
      'Why does a crane need a counterweight?',
      'How is a crane related to pulley systems?',
      'Explain crane torque in simple language.',
    ],
  },

  {
    id: 'elevator',
    name: 'Elevator',
    category: 'Vertical Transport',
    tagline: 'See how motors, counterweights, and safety brakes work together.',
    intro:
      'An elevator uses a balance of counterweights and lifting mechanisms to safely transport passengers vertically.',
    summary:
      'This lesson maps the hoistway, motor, counterweight, and safety mechanisms that make elevators reliable.',
    lessonTitle: 'Elevator system overview',
    videoId: 'rKp4pe92ljg',
    sourceKind: 'video',
    sourceLabel: 'Open verified Animagraffs lesson',
    sourceUrl: 'https://youtu.be/rKp4pe92ljg?si=AKw8PXEUoATyr5A8',
    searchQuery: 'Animagraffs Elevator',
    duration: '10 min lesson',
    level: 'Middle school to adult learners',
    focusLabel: 'Vertical lifting and safety',
    misconception:
      'Students often think the motor lifts the entire weight of the elevator car. In reality, a counterweight balances most of the load, so the motor only lifts the difference.',
    studyChecklist: [
      'Observe the role of the counterweight in reducing motor effort.',
      'Identify the overspeed governor and safety brakes.',
      'Notice how the cables and sheaves transfer force.',
    ],
    outcomes: ['Counterweight balancing', 'Safety braking systems', 'Motor and hoistway operation'],
    systems: [
      { title: 'Hoistway and Car', description: 'The car travels vertically within a guided shaft.' },
      { title: 'Counterweight', description: 'Balances the weight of the car to reduce the energy required.' },
      { title: 'Safety Mechanisms', description: 'Brakes and governors prevent the car from falling.' },
    ],
    visualExplainers: [
      'Watch how the counterweight moves in opposition to the car.',
      'See the safety brakes engage if the cable goes slack.',
      'Observe the motor turning the sheave at the top.',
    ],
    summarySections: [
      {
        title: 'The Balance of Weight',
        text: 'Most elevators use a counterweight system. The counterweight is usually equal to the weight of the empty car plus about half of its maximum passenger load. This balance means the motor only has to move the difference in weight, saving a massive amount of energy compared to lifting the full weight directly.',
      },
      {
        title: 'The Motor and Sheave',
        text: 'At the top of the elevator shaft sits the hoisting machine. An electric motor turns a large wheel with grooves, called a sheave. The steel cables connecting the car and counterweight pass over this sheave. The friction between the cables and the grooves provides the grip needed to move the car up and down.',
      },
      {
        title: 'Safety Brakes and the Governor',
        text: 'Elevators have multiple backup safety systems. The most famous is the overspeed governor. If the elevator moves downward too quickly, centrifugal force in the governor mechanism trips a switch that cuts power to the motor and deploys physical brakes on the guide rails, stopping the car safely even if all cables fail.',
      },
      {
        title: 'The Guide Rails',
        text: 'Both the elevator car and the counterweight run along vertical steel guide rails. These rails prevent the car from swinging back and forth, ensuring a smooth ride, and they provide the gripping surface for the safety brakes.',
      },
      {
        title: 'Doors and Sensors',
        text: 'The doors of an elevator are highly engineered for safety. The inner car door is driven by a motor, while the outer hallway doors have no motor and are only pulled open when the car aligns with the floor. Light sensors and pressure switches ensure the doors reopen if something blocks them.',
      },
      {
        title: 'The Big Picture',
        text: 'An elevator is a remarkably efficient and safe machine built around counterbalance, friction, and redundant safety mechanisms. It transformed modern architecture by making skyscrapers practical and safe for everyday use.',
      },
    ],
    quickPrompts: [
      'Why is a counterweight used in an elevator?',
      'What happens if the elevator cables break?',
      'How do the doors know when to open?',
    ],
  },
  {
    id: 'drone',
    name: 'Drone',
    category: 'Flight Systems',
    tagline: 'Understand how quadcopters balance, steer, and fly.',
    intro:
      'A drone uses four rotors to control lift, pitch, roll, and yaw through rapid adjustments in motor speed.',
    summary:
      'This lesson explains how flight controllers and sensors manage multiple motors to keep the drone stable.',
    lessonTitle: 'How a Drone works',
    videoId: 'N_XneaFmOmU',
    sourceKind: 'video',
    sourceLabel: 'Open verified Animagraffs lesson',
    sourceUrl: 'https://youtu.be/N_XneaFmOmU?si=FY63vXQHOwQ9c9mx',
    searchQuery: 'Animagraffs Drone',
    duration: '8 min lesson',
    level: 'Middle school to adult learners',
    focusLabel: 'Multi-rotor flight',
    misconception:
      'Students often think a drone steers like an airplane with flaps or a rudder. In reality, a quadcopter steers purely by changing the speeds of its four fixed rotors.',
    studyChecklist: [
      'Notice how opposite diagonal rotors spin in the same direction.',
      'Watch how speeding up the rear rotors causes the drone to pitch forward.',
      'Observe the role of the flight controller in maintaining stability.',
    ],
    outcomes: ['Rotor speed control', 'Pitch, roll, and yaw', 'Flight controller operation'],
    systems: [
      { title: 'Rotors and Motors', description: 'Four independent motors generate lift and directional control.' },
      { title: 'Flight Controller', description: 'The brain of the drone that constantly adjusts motor speeds.' },
      { title: 'Sensors', description: 'Gyroscopes and accelerometers feed orientation data to the controller.' },
    ],
    visualExplainers: [
      'Observe how diagonal pairs of propellers cancel out rotational torque.',
      'See how slowing down one side makes the drone roll.',
      'Watch the sensors communicate with the flight controller.',
    ],
    summarySections: [
      {
        title: 'The Basics of Quadcopter Flight',
        text: 'A quadcopter drone flies by using four spinning propellers to push air downward, creating upward lift. Unlike a helicopter which has a complex mechanical rotor head to change blade angles, a drone uses fixed-pitch blades. It maneuvers entirely by precisely varying the speed of its four electric motors.',
      },
      {
        title: 'Balancing Torque',
        text: 'If all four propellers spun the same way, the drone would constantly spin out of control due to torque reaction. To prevent this, two diagonal propellers spin clockwise, while the other two spin counter-clockwise. When all four spin at the same speed, their rotational forces cancel each other out, keeping the drone facing straight.',
      },
      {
        title: 'Pitch, Roll, and Yaw',
        text: 'To fly forward (pitch), the rear motors spin faster than the front motors, tilting the drone so lift pushes it forward. To fly sideways (roll), the motors on one side spin faster. To rotate in place (yaw), the drone speeds up two diagonal motors spinning in one direction and slows down the other two, unbalancing the torque intentionally.',
      },
      {
        title: 'The Flight Controller',
        text: 'A human cannot adjust four motor speeds fast enough to keep a drone stable. The flight controller acts as the brain. It takes commands from the pilots radio and translates them into thousands of tiny motor adjustments every second to keep the drone flying exactly where it should.',
      },
      {
        title: 'Sensors and Stability',
        text: 'The flight controller relies on a sensor package called an IMU (Inertial Measurement Unit), which contains microscopic gyroscopes and accelerometers. These sensors tell the drone exactly how it is tilted and moving in 3D space, allowing it to instantly correct for wind gusts or unbalanced weight.',
      },
      {
        title: 'The Big Picture',
        text: 'A drone is a triumph of software over hardware. Instead of complex mechanical linkages, it uses incredibly fast computers and sensors to manipulate four simple spinning blades into a perfectly stable, highly agile flying machine.',
      },
    ],
    quickPrompts: [
      'How does a drone fly forward without tilting its propellers?',
      'Why do the propellers spin in opposite directions?',
      'What does the flight controller do?',
    ],
  },
  {
    id: 'refrigerator',
    name: 'Refrigerator',
    category: 'Thermodynamics Systems',
    tagline: 'Understand how compressors, refrigerant, and phase changes cool things down.',
    intro:
      'A refrigerator does not "make cold." Instead, it pumps heat out of an insulated box using the physics of evaporation and condensation.',
    summary:
      'This lesson explains the refrigeration cycle, showing how a special fluid changes from liquid to gas and back to move thermal energy.',
    lessonTitle: 'How a Refrigerator Works',
    videoId: 'JUQ2Aw8W3BI',
    sourceKind: 'video',
    sourceLabel: 'Open verified Animagraffs lesson',
    sourceUrl: 'https://youtu.be/JUQ2Aw8W3BI?si=DbZFxWy9UBTrA-pK',
    searchQuery: 'Animagraffs Refrigerator',
    duration: '10 min lesson',
    level: 'Middle school to adult learners',
    focusLabel: 'Heat transfer and phase changes',
    misconception:
      'Many people think a fridge works by blowing cold air into the box. In reality, it works by absorbing heat from the inside air and dumping that heat outside the box.',
    studyChecklist: [
      'Trace the path of the refrigerant through the four main components.',
      'Notice where the fluid is a high-pressure liquid and where it is a low-pressure gas.',
      'Observe how the expansion valve acts like a spray nozzle to drop the temperature.',
    ],
    outcomes: ['Refrigeration cycle', 'Evaporation and condensation', 'Role of the compressor'],
    systems: [
      { title: 'Compressor', description: 'The pump that pressurizes the refrigerant gas, making it hot.' },
      { title: 'Condenser Coils', description: 'The outer coils where the hot gas releases heat and turns into a liquid.' },
      { title: 'Evaporator Coils', description: 'The inner coils where the cold liquid absorbs heat and turns into a gas.' },
    ],
    visualExplainers: [
      'Watch the refrigerant change colors as it gets hotter and colder.',
      'See the expansion valve instantly drop the pressure and temperature.',
      'Notice the fans moving air over the coils to speed up heat transfer.',
    ],
    summarySections: [
      {
        title: 'The Illusion of "Making Cold"',
        text: 'In physics, cold is not a substance; it is just the absence of heat. A refrigerator cannot create cold. Instead, it acts as a heat pump, constantly absorbing thermal energy from the food inside and rejecting that thermal energy into the kitchen air outside.',
      },
      {
        title: 'The Magic Fluid: Refrigerant',
        text: 'The entire system relies on a special chemical called a refrigerant. This fluid is designed to boil (turn from liquid to gas) at very low temperatures. By carefully manipulating the pressure of this fluid, the refrigerator can control exactly when and where it boils and condenses.',
      },
      {
        title: 'The Compressor: The Heart of the System',
        text: 'The cycle starts at the compressor, an electric pump. The compressor takes low-pressure refrigerant gas and squeezes it tightly. When a gas is compressed, its temperature shoots up. The refrigerant leaves the compressor as a very hot, high-pressure gas.',
      },
      {
        title: 'The Condenser: Dumping the Heat',
        text: 'This hot gas flows into the condenser coils on the back or bottom of the fridge. Because the gas is hotter than the room air, heat flows out of the gas and into the room. As it cools down under high pressure, the gas condenses into a warm liquid.',
      },
      {
        title: 'The Expansion Valve: The Magic Choke Point',
        text: 'The warm, high-pressure liquid then hits the expansion valve. This is a tiny restriction in the pipe. As the fluid squeezes through, it expands into a larger area, causing its pressure to plummet. This sudden drop in pressure causes a massive drop in temperature, turning it into a freezing cold liquid-gas mixture.',
      },
      {
        title: 'The Evaporator: Absorbing the Heat',
        text: 'The freezing cold fluid flows through the evaporator coils inside the fridge. A fan blows the inside air over these cold coils. The fluid absorbs heat from the air and boils into a low-pressure gas. The cooled air circulates back to chill the food, while the warm gas is sucked back into the compressor to start the cycle again.',
      },
    ],
    quickPrompts: [
      'Why does the back of a refrigerator feel warm?',
      'What happens to the refrigerant in the expansion valve?',
      'Can a refrigerator cool a room if you leave the door open?',
    ],
  },
  {
    id: 'mri',
    name: 'MRI Machine',
    category: 'Medical Imaging',
    tagline: 'See how powerful magnets and radio waves look inside the human body.',
    intro:
      'An MRI (Magnetic Resonance Imaging) scanner uses incredibly strong magnetic fields and radio waves to map the water inside our bodies in 3D.',
    summary:
      'This lesson explores the super-cooled magnets, the gradient coils, and the physics of nuclear magnetic resonance that make clear internal imaging possible.',
    lessonTitle: 'How an MRI Machine Works',
    videoId: 'nFkBhUYynUw',
    sourceKind: 'video',
    sourceLabel: 'Open verified Animagraffs lesson',
    sourceUrl: 'https://youtu.be/nFkBhUYynUw?si=RNnsoE6ADQvZ_Bxh',
    searchQuery: 'Animagraffs MRI Machine',
    duration: '15 min lesson',
    level: 'High school to adult learners',
    focusLabel: 'Magnetism and resonance',
    misconception:
      'Many people confuse MRI with X-rays. While X-rays use ionizing radiation to see dense bone, MRI uses safe magnetic fields to see soft tissue based on its water content.',
    studyChecklist: [
      'Understand the role of the main superconducting magnet.',
      'Notice how gradient coils allow the machine to target specific 3D slices of the body.',
      'Observe how radio frequency pulses flip hydrogen protons.',
    ],
    outcomes: ['Magnetic resonance', 'Superconductivity', '3D image reconstruction'],
    systems: [
      { title: 'Superconducting Magnet', description: 'Creates a massive, uniform magnetic field that aligns hydrogen atoms.' },
      { title: 'Gradient Coils', description: 'Smaller magnets that alter the main field to locate signals in 3D space.' },
      { title: 'RF Coils', description: 'Antennas that send radio waves into the body and listen for the echoes returning from protons.' },
    ],
    visualExplainers: [
      'Watch how the main magnet aligns the protons in water molecules.',
      'See the radio pulse knock the protons out of alignment.',
      'Notice how the gradient coils create a magnetic slope to isolate a single slice of tissue.',
    ],
    summarySections: [
      {
        title: 'The Human Body is Mostly Water',
        text: 'The fundamental principle behind an MRI is that the human body is mostly water, and water contains hydrogen atoms. The nucleus of a hydrogen atom is a single proton, which acts like a tiny bar magnet with its own north and south pole. Normally, these tiny magnets spin randomly, pointing in all directions.',
      },
      {
        title: 'The Main Superconducting Magnet',
        text: 'The core of an MRI is a massive electromagnet made of superconducting wire bathed in liquid helium at nearly absolute zero. This creates a magnetic field tens of thousands of times stronger than the Earth\'s magnetic field. When a patient enters the scanner, this field forces the hydrogen protons in their body to align with it.',
      },
      {
        title: 'The Radio Frequency (RF) Pulse',
        text: 'Once the protons are aligned, the MRI machine fires a precise burst of radio waves (an RF pulse) at the body. This energy knocks the protons out of their alignment. When the RF pulse is turned off, the protons snap back into alignment with the main magnetic field. As they snap back, they release the energy they absorbed as a weak radio signal, or "echo."',
      },
      {
        title: 'Listening for the Echo',
        text: 'Special antennas called RF coils are placed around the body part being scanned. These coils listen for the radio echoes released by the protons. Different tissues (like fat, muscle, and tumor cells) have different amounts of water and release their echoes at slightly different speeds, providing the contrast needed to tell them apart.',
      },
      {
        title: 'Gradient Coils for 3D Mapping',
        text: 'If the MRI only used the main magnet and RF pulses, it would just get one big jumbled echo from the whole body. To fix this, smaller electromagnets called gradient coils are turned on and off rapidly. They slightly alter the strength of the magnetic field from head to toe, left to right, and front to back. This allows the machine to target and map protons in exact 3D locations.',
      },
      {
        title: 'The Big Picture',
        text: 'An MRI machine is an incredible feat of physics and engineering. It uses super-cooled magnets, carefully tuned radio waves, and complex math to safely peer inside the human body and create detailed 3D maps of our internal soft tissues without using any harmful radiation.',
      },
    ],
    quickPrompts: [
      'Why does an MRI machine need liquid helium?',
      'What do the gradient coils actually do?',
      'Why is MRI better for looking at the brain than an X-ray?',
    ],
  },
  {
    id: 'motor',
    name: 'Electric Motor',
    category: 'Electromagnetism',
    tagline: 'See how magnetism and electricity turn wires into rotational power.',
    intro:
      'An electric motor converts electrical energy into mechanical energy using the interactions between magnetic fields and current-carrying wire coils.',
    summary:
      'This lesson maps the stator, rotor, commutator, and the continuous push-and-pull of magnetic forces that make motors spin.',
    lessonTitle: 'How an Electric Motor Works',
    videoId: 'CWulQ1ZSE3c',
    sourceKind: 'video',
    sourceLabel: 'Open verified Animagraffs lesson',
    sourceUrl: 'https://youtu.be/CWulQ1ZSE3c?si=pXIF6BfjbPEZFE97',
    searchQuery: 'Animagraffs Electric Motor',
    duration: '12 min lesson',
    level: 'Middle school to adult learners',
    focusLabel: 'Electromagnetic rotation',
    misconception:
      'Students often think electricity directly powers movement. In reality, electricity is used to create temporary magnets that push against permanent magnets to cause rotation.',
    studyChecklist: [
      'Observe the permanent magnets in the stator.',
      'Watch how the commutator flips the electrical current as the rotor turns.',
      'Notice the constant repulsion and attraction between the electromagnets and permanent magnets.',
    ],
    outcomes: ['Electromagnetism', 'Commutator function', 'Rotational mechanics'],
    systems: [
      { title: 'Stator', description: 'The stationary outer part containing permanent magnets.' },
      { title: 'Rotor (Armature)', description: 'The spinning inner part with coils of wire that become electromagnets.' },
      { title: 'Commutator & Brushes', description: 'The sliding electrical connection that flips the current direction to keep the motor spinning.' },
    ],
    visualExplainers: [
      'Watch the magnetic field lines interact as current flows.',
      'See the exact moment the brushes cross the commutator gap to reverse polarity.',
      'Notice how adding more coils smooths out the rotational force.',
    ],
    summarySections: [
      {
        title: 'Magnets Pushing and Pulling',
        text: 'The fundamental principle of an electric motor is magnetism. We know that opposite magnetic poles attract, and identical poles repel. A motor surrounds a central spinning piece with permanent magnets, and uses electromagnetism to constantly push and pull against them.',
      },
      {
        title: 'The Electromagnet (Rotor)',
        text: 'When electricity flows through a coiled wire, it creates a magnetic field, turning the wire into an electromagnet. In a motor, this coil is called the armature or rotor. By sending electricity through the rotor, it becomes a magnet that either attracts or repels the permanent magnets on the outside.',
      },
      {
        title: 'The Need to Flip Polarity',
        text: 'If the rotor just became a magnet, it would spin halfway, align with the opposite permanent magnet, and stop dead. To keep it spinning, the motor must instantly flip the north and south poles of the electromagnet just as it reaches the alignment point. It does this by reversing the direction of the electricity.',
      },
      {
        title: 'The Commutator and Brushes',
        text: 'To reverse the electricity while the rotor is spinning, DC motors use a clever mechanical switch called a commutator. It is a split ring attached to the rotor. Stationary carbon "brushes" slide against this ring to deliver power. Every half-turn, the brushes slide across the split to the other half of the ring, reversing the current flow and flipping the magnetic field.',
      },
      {
        title: 'Smoothing the Spin',
        text: 'A simple motor with only one coil will be jerky and might get stuck if it stops in the wrong position. Real motors use multiple coils wrapped at different angles, with a commutator divided into many small segments. This ensures there is always a coil in the perfect position to deliver maximum rotational push.',
      },
      {
        title: 'The Big Picture',
        text: 'Electric motors are pure, continuous electromagnetic leverage. By using a clever sliding switch to constantly flip the poles of an electromagnet, they trick magnetic forces into chasing each other in an endless circle, converting electrical current directly into spinning mechanical power.',
      },
    ],
    quickPrompts: [
      'Why does the commutator have a gap in it?',
      'What is the difference between the stator and the rotor?',
      'How does adding more coils change how the motor runs?',
    ],
  },
  {
    id: 'printer',
    name: '3D Printer',
    category: 'Manufacturing',
    tagline: 'Discover how motors, heat, and precise code build objects layer by layer.',
    intro:
      'A 3D printer transforms digital models into physical reality by precisely melting and stacking thin layers of plastic.',
    summary:
      'This lesson explores the extruder, hot end, stepper motors, and the coordinate systems that make precise 3D manufacturing possible.',
    lessonTitle: 'How a 3D Printer Works',
    videoId: 'f94CnlQ0eq4',
    sourceKind: 'video',
    sourceLabel: 'Open verified Animagraffs lesson',
    sourceUrl: 'https://youtu.be/f94CnlQ0eq4?si=C-DHGPLrappZTHCH',
    searchQuery: 'Animagraffs 3D Printer',
    duration: '14 min lesson',
    level: 'Middle school to adult learners',
    focusLabel: 'Additive manufacturing',
    misconception:
      'Students often think the printer just "pours" plastic into a mold. In reality, it calculates an exact path and draws the object one microscopic layer at a time.',
    studyChecklist: [
      'Observe how the filament is pushed by the extruder gears.',
      'Notice how the hot end melts the plastic right before it leaves the nozzle.',
      'Watch how the stepper motors control movement in the X, Y, and Z axes.',
    ],
    outcomes: ['Extrusion mechanics', 'XYZ coordinate movement', 'Thermal control'],
    systems: [
      { title: 'Extruder & Hot End', description: 'The system that feeds raw plastic filament, melts it, and pushes it through a tiny nozzle.' },
      { title: 'Motion System', description: 'Stepper motors and belts that move the print head with sub-millimeter accuracy.' },
      { title: 'Motherboard', description: 'The brain of the printer that translates G-code into precise electrical signals.' },
    ],
    visualExplainers: [
      'Watch the filament feed gear bite into the plastic wire.',
      'See the cooling fan solidify the plastic as soon as it leaves the nozzle.',
      'Notice the precise coordination of the X, Y, and Z axes working together.',
    ],
    summarySections: [
      {
        title: 'Building from the Ground Up',
        text: 'Unlike traditional manufacturing which carves material away from a block, 3D printing is additive. It builds objects from the bottom up, laying down one incredibly thin layer of melted plastic at a time until the final 3D shape is complete.',
      },
      {
        title: 'The Filament and Extruder',
        text: 'The raw material is usually a spool of plastic wire called filament. A motor known as the extruder uses sharp gears to bite into this filament and push it forcefully through a tube toward the printing nozzle.',
      },
      {
        title: 'The Hot End and Nozzle',
        text: 'At the print head, the filament enters the hot end. A heater block brings the temperature up to around 200°C (400°F), turning the solid plastic into a thick liquid. The extruder pushes this melted plastic out through a microscopic hole in the nozzle, like icing a very precise cake.',
      },
      {
        title: 'Cooling for Precision',
        text: 'As soon as the hot plastic leaves the nozzle, it must harden instantly so the next layer can be printed on top. To achieve this, a specialized cooling fan blows directly onto the freshly extruded plastic, locking it into its final shape.',
      },
      {
        title: 'The Stepper Motors (X, Y, Z)',
        text: 'To draw a shape, the printer must move the nozzle with extreme precision. It uses stepper motors—special electric motors that move in exact, tiny fractions of a rotation (steps). These motors use belts and threaded rods to move the print head left and right (X), forward and back (Y), and up and down (Z).',
      },
      {
        title: 'The Motherboard and G-Code',
        text: 'The printer is controlled by a motherboard that reads a file containing G-code. G-code is a list of thousands of coordinates telling the printer exactly where to move, how fast to go, and how much plastic to extrude at every millisecond of the print.',
      },
    ],
    quickPrompts: [
      'Why is there a cooling fan pointing at the nozzle?',
      'What is the difference between an ordinary motor and a stepper motor?',
      'How does the printer know what shape to draw?',
    ],
  },
  {
    id: 'transformer',
    name: 'Electrical Transformer',
    category: 'Electromagnetism',
    tagline: 'Understand how voltage is stepped up or down for power distribution.',
    intro:
      'A transformer changes the voltage of an alternating current (AC) circuit using the principles of electromagnetic induction.',
    summary:
      'This lesson explores the primary and secondary coils, the iron core, and how changing magnetic fields transfer power without moving parts.',
    lessonTitle: 'How a Transformer Works',
    videoId: '96Vekm8Ws4U',
    sourceKind: 'video',
    sourceLabel: 'Open verified Animagraffs lesson',
    sourceUrl: 'https://youtu.be/96Vekm8Ws4U?si=fbHeCAe_m_yCN-6Z',
    searchQuery: 'Animagraffs Transformer',
    duration: '11 min lesson',
    level: 'High school to adult learners',
    focusLabel: 'Voltage and induction',
    misconception:
      'Many people think transformers generate electricity. In reality, they only convert existing electrical power from high voltage/low current to low voltage/high current (or vice versa).',
    studyChecklist: [
      'Observe the difference in the number of turns between the primary and secondary coils.',
      'Notice how the iron core directs the magnetic field lines.',
      'Watch how alternating current is necessary to create a constantly changing magnetic field.',
    ],
    outcomes: ['Electromagnetic induction', 'Step-up and step-down voltage', 'AC power transmission'],
    systems: [
      { title: 'Primary Coil', description: 'The input wire that creates a fluctuating magnetic field when alternating current flows through it.' },
      { title: 'Secondary Coil', description: 'The output wire where the fluctuating magnetic field induces a new alternating current.' },
      { title: 'Iron Core', description: 'A highly permeable magnetic pathway that links the two coils together.' },
    ],
    visualExplainers: [
      'Watch the magnetic flux flow continuously around the iron core.',
      'See how more turns on the secondary coil results in higher output voltage.',
      'Notice the cooling oil and fins used in large industrial transformers to manage heat.',
    ],
    summarySections: [
      {
        title: 'The Need for Transformers',
        text: 'To transmit electricity over long distances without losing all the energy to heat, power plants must send it at extremely high voltages. However, homes and appliances require low voltages to operate safely. Transformers are the essential machines that step this voltage up for transmission and step it back down for use.',
      },
      {
        title: 'Electromagnetic Induction',
        text: 'The fundamental physics behind a transformer is induction. When you pass a changing electrical current through a wire, it creates a fluctuating magnetic field. If you place a second wire inside that fluctuating magnetic field, a new electrical current will be induced in the second wire. Power jumps across empty space!',
      },
      {
        title: 'The Iron Core',
        text: 'To make this transfer efficient, both coils of wire are wrapped around a solid iron core. Iron is highly permeable to magnetic fields, meaning it easily guides the magnetic flux created by the primary coil directly into the center of the secondary coil without it spilling out into the surrounding air.',
      },
      {
        title: 'Voltage is About the Ratio',
        text: 'The magic of the transformer lies in the ratio of the wire wraps (turns). If the primary coil has 100 turns and the secondary coil has 10 turns, the voltage will be divided by 10 (stepped down). If you reverse it, the voltage is multiplied by 10 (stepped up).',
      },
      {
        title: 'The Trade-off: Current',
        text: 'A transformer cannot create free energy. Power (Watts) equals Voltage multiplied by Current (Amps). If a transformer steps the voltage up by 10x, it must simultaneously step the current down by 10x. This allows high-power lines to carry massive energy with very low current, reducing heat loss.',
      },
      {
        title: 'Why We Use AC',
        text: 'Transformers absolutely require Alternating Current (AC) to work. Induction only happens when a magnetic field is changing. Because AC is constantly reversing direction 50 or 60 times a second, its magnetic field is always expanding and collapsing, keeping the induction process alive. If you connected a transformer to a DC battery, it would do nothing.',
      },
    ],
    quickPrompts: [
      'Why cant transformers work with Direct Current (DC)?',
      'What happens if the secondary coil has more turns than the primary coil?',
      'Why is the iron core necessary?',
    ],
  }
]
