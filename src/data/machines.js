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
    id: 'cycle',
    name: 'Bicycle',
    category: 'Human-Powered Machines',
    tagline: 'See how pedaling, gears, balance, and braking connect.',
    intro:
      'A bicycle is a great learning machine because students can directly feel leverage, torque, rotation, friction, and balance.',
    summary:
      'This lesson maps pedal input to chain transfer, wheel rotation, steering control, and safe braking.',
    lessonTitle: 'Bicycle drivetrain study',
    videoId: null,
    sourceKind: 'search',
    sourceLabel: 'Search Animagraffs references',
    sourceUrl: 'https://www.youtube.com/results?search_query=Animagraffs%20bicycle%20drivetrain%20braking',
    searchQuery: 'Animagraffs bicycle drivetrain braking',
    duration: '9 min lesson',
    level: 'All ages',
    focusLabel: 'Human power flow',
    misconception:
      'Students often treat bicycles as simple wheels and pedals. The more useful view is that a bicycle is a power-transfer and stability system working continuously.',
    studyChecklist: [
      'Follow force from the rider into the crank, chain, and rear wheel.',
      'Compare how gear choice changes force versus speed.',
      'Observe how steering and balance corrections happen together.',
    ],
    outcomes: ['Pedal leverage', 'Chain drivetrain', 'Balance and braking'],
    systems: [
      { title: 'Crank and pedals', description: 'The rider applies torque through rotating levers.' },
      { title: 'Chain drive', description: 'Sprockets and chain transfer power to the rear wheel.' },
      { title: 'Balance and stopping', description: 'Steering geometry and brakes keep the ride controlled.' },
    ],
    visualExplainers: [
      'Look at how crank length affects leverage.',
      'Compare small and large sprockets.',
      'Observe how braking changes wheel behavior.',
    ],
    summarySections: [
      {
        title: 'How Pedaling Creates Motion',
        text:
          'A bicycle starts with human input. When the rider pushes on the pedals, the crank turns and creates torque. That turning motion moves the chainring, which pulls the chain and transfers force to the rear sprocket. The rear wheel then rotates and pushes backward against the ground, and the ground pushes the bicycle forward.',
      },
      {
        title: 'The Drivetrain and Gear Ratios',
        text:
          'The bicycle drivetrain is a force-transfer system. Changing gears alters the relationship between pedal rotation and wheel rotation. Lower gears make pedaling easier and are useful for starting or climbing hills. Higher gears allow more distance per pedal turn but require more effort. This makes the bicycle a clear everyday example of force-versus-speed tradeoffs.',
      },
      {
        title: 'Balance, Steering, and Frame Geometry',
        text:
          'A bicycle stays upright through constant correction. As the rider leans slightly, the steering system helps move the wheels under the center of mass. Wheel rotation, steering geometry, and the rider’s own adjustments all help maintain balance. The faster the bicycle moves, the easier these corrections often become, which is why balancing at very low speed feels harder.',
      },
      {
        title: 'Brakes, Tires, and Contact with the Ground',
        text:
          'Brakes slow the bicycle by creating friction at the wheel. Tires provide grip with the road so that pedaling, turning, and braking all work effectively. Without sufficient traction, the rider can lose control even if the drivetrain is working perfectly. This makes the bicycle a useful machine for understanding how motion depends on contact forces with the ground.',
      },
      {
        title: 'Energy, Efficiency, and Rider Input',
        text:
          'Unlike an engine-powered vehicle, a bicycle uses direct human energy. That makes it extremely efficient for short travel because most of the system is focused on transferring rider effort with relatively low losses. Small changes in posture, gear choice, and road conditions strongly affect how efficiently the bicycle moves.',
      },
      {
        title: 'The Big Picture',
        text:
          'A bicycle may look simple, but it brings together leverage, rotation, torque, friction, braking, and dynamic balance in one familiar machine. That is why it is such a strong teaching tool: students can feel the physics directly while riding.',
      },
    ],
    quickPrompts: [
      'Why do bicycles become easier to balance when moving?',
      'Explain bike gears without equations.',
      'How do disc brakes slow the wheel down?',
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
    id: 'ship',
    name: 'Ship',
    category: 'Marine Engineering',
    tagline: 'Understand buoyancy, propulsion, hull design, and steering.',
    intro:
      'A ship works because buoyancy, propulsion, and stability all operate together in water.',
    summary:
      'This lesson shows why ships float, how propellers create thrust, and how hull design affects movement and balance.',
    lessonTitle: 'Inside the USS Zumwalt',
    videoId: null,
    sourceKind: 'article',
    sourceLabel: 'Open verified Animagraffs reference',
    sourceUrl: 'https://animagraffs.com/uss-zumwalt/',
    searchQuery: 'Animagraffs ship propulsion buoyancy',
    duration: '11 min lesson',
    level: 'Middle school to adult learners',
    focusLabel: 'Buoyancy and propulsion',
    misconception:
      'Students often think ships float because they are hollow. The better explanation is that the full hull displaces enough water for buoyancy to balance the ship weight.',
    studyChecklist: [
      'Relate displacement directly to buoyant force.',
      'Follow how the propeller changes water momentum to create thrust.',
      'Distinguish floating, forward motion, and roll stability as separate problems.',
    ],
    outcomes: ['Why ships float', 'Propeller thrust', 'Hull and rudder roles'],
    systems: [
      { title: 'Hull', description: 'The hull displaces water and produces buoyant support.' },
      { title: 'Propulsion', description: 'A propeller pushes water backward to move the ship forward.' },
      { title: 'Navigation', description: 'The rudder and stability systems keep the vessel on course.' },
    ],
    visualExplainers: [
      'Relate hull volume to buoyant force.',
      'Watch the propeller push water backward.',
      'Observe how hull width and ballast influence roll stability.',
    ],
    summarySections: [
      {
        title: 'Why a Ship Can Float',
        text:
          'A ship floats because it displaces water. As the hull pushes water aside, the water pushes upward with a buoyant force. If this upward force balances the weight of the ship, the ship floats. This is why even a steel ship can stay afloat: what matters is the average density of the whole ship and how much water its hull displaces.',
      },
      {
        title: 'Hull Design and Stability',
        text:
          'The hull is more than just a shell. Its shape affects how efficiently the ship moves through water, how much cargo it can carry, and how stable it remains in waves. A wide hull may improve stability, while a streamlined hull may reduce drag. Designers must balance strength, speed, efficiency, and seaworthiness.',
      },
      {
        title: 'How Propulsion Moves the Ship',
        text:
          'Most ships use engines to spin propellers. The propeller pushes water backward, and the equal and opposite reaction pushes the ship forward. This is an example of momentum exchange in a fluid. The engine, propeller shaft, and propeller together form the propulsion chain that converts stored fuel energy into motion through water.',
      },
      {
        title: 'Steering and Direction Control',
        text:
          'Ships usually steer with a rudder placed behind the propeller or in the flow of moving water. When the rudder changes the direction of water flow, it produces a sideways force that turns the vessel. Because ships are massive and water resists sudden changes, turning takes time and must be carefully controlled.',
      },
      {
        title: 'Ballast, Weight Distribution, and Safety',
        text:
          'Ships must manage where their mass is located. Ballast systems help maintain proper stability by adjusting how the ship sits in the water. Uneven loading can make a vessel unsafe, reduce efficiency, or increase rolling. This is why marine engineering cares deeply about center of mass and buoyant support.',
      },
      {
        title: 'The Big Picture',
        text:
          'A ship is a marine systems machine that combines buoyancy, propulsion, steering, structure, and stability. Students understand ships best when they see floating, forward motion, and balance as three connected but different engineering problems being solved at the same time.',
      },
    ],
    quickPrompts: [
      'How can steel ships float on water?',
      'Explain a propeller using Newtons laws.',
      'What keeps a ship from rolling over easily?',
    ],
  },
]
