import React from "react";
import pickupcad from "../assets/guitar/pickupcad.jpg";
import kapton from "../assets/guitar/kapton.jpg";
import pickups from "../assets/guitar/pickups.jpg";
import magnets from "../assets/guitar/magnets.jpg";
import winderSchematic from "../assets/pickup-winder/winder-schematic.png";
import wires from "../assets/pickup-winder/wires.jpeg";
import tape from "../assets/pickup-winder/tape.jpeg";
import pickup from "../assets/pickup-winder/pickup.jpeg";
import done from "../assets/pickup-winder/done.jpeg";

// Sidebar section titles
const sections = [
  // { id: "reflections", label: "Reflections" },
  { id: "overview", label: "Overview" },
  { id: "circuit", label: "Circuit" },
  { id: "code", label: "Code" },
  { id: "assembly", label: "Assembly" },
  { id: "Winding", label: "Winding" },
];

// Circuit steps
const circuitSteps = [
  {
    title: "Assemble Circuit",
    images: [winderSchematic],
    text: "Here is the schematic of the circuit. The H-bridge is used to control the direction of the motor. The reed switch is used to detect when the magnet passes by. The 10k ohm potentiometer is used to control the brightness of the LCD (LCD screens always need a pot). The LCD screen is used to display the number of turns.",
  },
];

// Code steps
const codeSteps = [
  {
    title: "Write Motor Control Code",
    images: [],
    text: "We need a program that counts up when the reed switch as activated while the motor is going in a clockwise direction and counts down when the motor is going counterclockwise. Here is the code I wrote:",
    code: `#include <LiquidCrystal.h>

//LCD: RS, E, D4, D5, D6, D7
LiquidCrystal lcd(7, 8, 9, 10, 13, 12);

//pins
const int reedPin = 4;
const int switchLeftPin = 5;
const int switchRightPin = 6;
const int motorIn1 = 3;
const int motorIn2 = 2;
const int motorEnablePin = 11;  

volatile int count = 0;
bool lastReedState = HIGH;
unsigned long lastDebounceTime = 0;
const unsigned long debounceDelay = 100;

void setup() {
  //lcd
  lcd.begin(16, 2);
  lcd.setCursor(0, 0);
  lcd.print("Turns: ");
  lcd.setCursor(0, 1);
  lcd.print(count);

  //pins
  pinMode(reedPin, INPUT);  //external pull-up resistor in use
  pinMode(switchLeftPin, INPUT_PULLUP);
  pinMode(switchRightPin, INPUT_PULLUP);
  pinMode(motorIn1, OUTPUT);
  pinMode(motorIn2, OUTPUT);
  pinMode(motorEnablePin, OUTPUT);
}

void loop() {
  bool leftActive = digitalRead(switchLeftPin) == LOW;
  bool rightActive = digitalRead(switchRightPin) == LOW;
  analogWrite(motorEnablePin, 50); //speed = 100 out of 255

  //handle motor control
  if (leftActive) {
    //clockwise
    digitalWrite(motorIn1, HIGH);
    digitalWrite(motorIn2, LOW);
  } else if (rightActive) {
    //counterclockwise
    digitalWrite(motorIn1, LOW);
    digitalWrite(motorIn2, HIGH);
  } else {
    //off
    digitalWrite(motorIn1, LOW);
    digitalWrite(motorIn2, LOW);
  }

  bool currentReedState = digitalRead(reedPin);
  if (lastReedState == HIGH && currentReedState == LOW) {
    if (millis() - lastDebounceTime > debounceDelay) {
      //count based on direction
      if (leftActive) {
        count++;
      } else if (rightActive) {
        count--;
      }

      //update display
      lcd.setCursor(0, 1);
      lcd.print("                ");
      lcd.setCursor(0, 1);
      lcd.print(count);

      lastDebounceTime = millis();
    }
  }
  lastReedState = currentReedState;
}`,
    link: {
      url: "https://github.com/min-kim123/pickup-winder",
      text: "View code on GitHub",
    },
  },
];

// Assembly steps
const assemblySteps = [
  {
    title: "Connect Circuit",
    images: [wires],
    text: "Cut and prepare the base material for mounting all components.",
  },
  {
    title: "Build Structure",
    images: [wires],
    text: "I took a scrap 3D printed part and used that as a mount for the winder. I hot glued the circular plastic part that I 3D printed to the motor directly, and mounted the motor onto the scrap part with a piece of wood screwed on top. I also put a hole on the underside of the circular part to place the magnet flush against it.",
  },
  {
    title: "Mount Pickup & Tape",
    images: [tape],
    text: "You're going to want to tape all around the pickup to prevent the thin copper wire from going under the pickup bobbin and gtting stuck between the bobbin and the plastic.",
  },
];

// Winding steps
const windingSteps = [
  {
    title: "Start Winding!",
    images: [kapton],
    text: "Prepare the pickup bobbin and secure it to the spindle for winding.",
  },
  {
    title: "If String Breaks",
    images: [],
    text: "Your string is likely to break while winding because it's just so thin. When it does, just tin both ends of the broken wire, then solder them together. You may have to sand the ends of the wire to get the tin to stick.",
  },
  {
    title: "Finished!",
    images: [done],
    text: "Do ~6000 times for the neck pickup and ~8000 times for the bridge pickup. Congrats! You've successfully built your own pickup winder & know how to wind pickups!",
  },
];

// Overview content
const overview = {
  materials: [
    "reed switch",
    "arduino uno/mega",
    "2x 10K ohm resistors",
    "H-bridge",
    "Bread Board",
    "Wire",
    "Barrel Jack Connector",
    "LCD Screen",
    "Bi-state switch",
    "small magnet",
    "10k ohm potentiometer",
  ],
  tools: ["Soldering iron", "Drill and bits", "Screwdrivers"],
};

function Step({ title, images = [], text, code, link, index }) {
  return (
    <li className="flex items-start gap-3">
      <span className="font-bold text-lg min-w-[2rem]">{index + 1}.</span>
      <div className="flex-1">
        <div className="mb-2 font-bold">{title}</div>
        <div className="flex gap-4 mb-2 flex-wrap">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              className={
                title === "Assemble Circuit"
                  ? "w-full rounded-sm"
                  : "w-full md:w-1/3 h-48 object-cover rounded-sm"
              }
            />
          ))}
        </div>
        {text && (
          <p>
            {text}
            {link && (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline ml-1"
              >
                {link.text}
              </a>
            )}
          </p>
        )}
        {code && (
          <div className="mt-4">
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </li>
  );
}

function ListSection({ title, items }) {
  return (
    <>
      <p className="font-semibold mb-2">{title}</p>
      <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default function PickupWinder() {
  return (
    <div className="mx-6 mt-4">
      <h1 className="text-3xl mb-3 text-left">Pickup Winder</h1>
      <div className="flex p-6">
        {/* Sidebar */}
        <div className="hidden md:block w-1/4 pr-4 sticky top-6 h-fit">
          <nav className="flex flex-col space-y-2 text-left">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="hover:underline"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4 space-y-12 text-left default-p-font">
          {/* Reflections */}
          {/* <section id="reflections" className="section-anchor">
            <h2 className="text-2xl mb-2">Reflections & Lessons Learned</h2>
            <p className="mb-4">
              Building a pickup winder was a great way to combine my interests
              in electronics, programming, and guitar building. It taught me a
              lot about precision control systems and the importance of
              consistent manufacturing processes.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Biggest Challenges I Faced
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Getting consistent wire tension during winding</li>
                  <li>Programming smooth motor control algorithms</li>
                  <li>Designing a reliable wire guide system</li>
                  <li>Calibrating the turn counter accuracy</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Challenges & Solutions
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Wire tension - added a spring-loaded tensioner system</li>
                  <li>
                    Motor control - implemented PID control for smooth operation
                  </li>
                  <li>
                    Wire guide - designed a cam-driven system for even
                    distribution
                  </li>
                  <li>
                    Counter accuracy - used optical encoder for precise counting
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  What I'd Do Differently
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Add more sophisticated wire tension control</li>
                  <li>
                    Implement preset winding patterns for different pickup types
                  </li>
                  <li>Add data logging for quality control</li>
                  <li>Design a more robust bobbin mounting system</li>
                </ul>
              </div>
            </div>
            <hr className="my-6" />
          </section> */}

          {/* Overview */}
          <section id="overview" className="section-anchor">
            <h2 className="text-2xl mb-2">Overview</h2>
            <p className="mb-4">
              An electic guitar pickup is 6 magnets with copper coil wound
              around it thousands of times (6000-6500 times for neck pickup,
              8000-8500 times for bridge pickup). There are pickup winding
              machines out there that professionals use, but those costs way too
              much money for a hobbyist, so I built my own.
            </p>
            <ListSection title="Materials Used" items={overview.materials} />
            <ListSection title="Tools Required" items={overview.tools} />

            <hr className="my-6" />
          </section>

          {/* Circuit */}
          <section id="circuit" className="section-anchor">
            <h2 className="text-2xl mb-2">Circuit</h2>
            <ol className="list-none space-y-6">
              {circuitSteps.map((step, i) => (
                <Step key={i} {...step} index={i} />
              ))}
            </ol>
            <hr className="my-6" />
          </section>

          {/* Code */}
          <section id="code" className="section-anchor">
            <h2 className="text-2xl mb-2">Code</h2>
            <ol className="list-none space-y-6">
              {codeSteps.map((step, i) => (
                <Step key={i} {...step} index={i} />
              ))}
            </ol>
            <hr className="my-6" />
          </section>

          {/* Assembly */}
          <section id="assembly" className="section-anchor">
            <h2 className="text-2xl mb-2">Assembly</h2>
            <ol className="list-none space-y-6">
              {assemblySteps.map((step, i) => (
                <Step key={i} {...step} index={i} />
              ))}
            </ol>
            <hr className="my-6" />
          </section>

          {/* Winding */}
          <section id="Winding" className="section-anchor">
            <h2 className="text-2xl mb-2">Winding</h2>
            <ol className="list-none space-y-6">
              {windingSteps.map((step, i) => (
                <Step key={i} {...step} index={i} />
              ))}
            </ol>
            <hr className="my-6" />
          </section>
        </div>
      </div>
      <style jsx>{`
        .default-p-font p {
          font-size: 1rem !important;
          line-height: 1.5 !important;
        }
        .section-anchor {
          scroll-margin-top: 40px;
        }
      `}</style>
    </div>
  );
}
