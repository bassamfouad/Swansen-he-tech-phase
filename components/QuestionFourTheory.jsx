import React from "react";

const QuestionFourTheory = () => {
  return (
    <div className="container   mt-24 overflow-hidden ">
      <div className="flex justify-center items-center h-full">
        <div className="p-24">
          <div className="">
            <div className="flex flex-col">
              <div className="flex flex-col gap-3">
                <p className="font-bold">
                  {`IV. Which architecture would you use for the required task below? Why?V. Create a currency converter by utilizing data from the fixer.io API.The currency converter must include a currency selector at the top to use as thebase currency and display updated currency rates based on the selected basecurrency. When a user taps on a currency, a calculation view should appear withthe selected currency and base currency. Only the base currency field should beeditable.Feel free to use any open source libraries.(Consider this project as if you were developing a component within a large-scaled project)`}
                </p>
              </div>
              <div className="flex flex-col gap-8 mt-4 text-left p-4 mb-4">
                <ul>
                  <li>
                    For the currency converter web app, the following frameworks
                    and means of communication can be utilized within the
                    suggested architecture:
                  </li>
                  <ol>
                    <li>
                      Frontend Frameworks: Popular frontend frameworks like
                      React, Angular, or Vue.js can be employed to build the
                      client-side user interface. These frameworks offer
                      component-based development, efficient state management,
                      and seamless interaction with the backend.
                    </li>
                    <li>
                      Backend Frameworks: Backend frameworks such as Node.js
                      with Express, Django, or Ruby on Rails can be used to
                      develop the server-side microservices. These frameworks
                      provide robust routing, request handling, and database
                      integration capabilities.
                    </li>
                    <li>
                      Communication: The microservices can communicate with each
                      other through lightweight protocols like HTTP/REST or
                      message queues like RabbitMQ or Apache Kafka. RESTful APIs
                      can be designed to facilitate communication between the
                      client and the server.
                    </li>
                    <li>
                      Task Distribution: A task distribution mechanism like load
                      balancers can be employed to distribute requests among
                      multiple instances of microservices. This ensures
                      efficient utilization of resources and enables horizontal
                      scalability.
                    </li>
                    <li>
                      Containerization and Orchestration: Technologies like
                      Docker and Kubernetes can be utilized for containerizing
                      and orchestrating the microservices. Containerization
                      enables easy deployment and scalability, while
                      orchestration ensures efficient management of containers,
                      scaling, and fault tolerance.
                    </li>
                  </ol>
                </ul>
                By utilizing these frameworks and means of communication, the
                architecture ensures efficient communication between the client
                and the server, distributed task processing, and scalability to
                handle increasing user demands.
              </div>
              <div className="flex flex-col gap-8 mt-4 text-left p-4">
                <ul>
                  <li className="font-extrabold">
                    For the Tech-stack that i would persoally use{" "}
                  </li>
                  <ol>
                    <li>
                      For the frontend, React can be chosen as the framework due
                      to its popularity, extensive community support, and robust
                      component-based architecture. React allows for efficient
                      rendering of dynamic user interfaces and provides
                      excellent state management through libraries like Redux or
                      React Context.
                    </li>
                    <li>
                      For the backend, Node.js with Express can be selected as
                      the framework. Node.js offers event-driven, non-blocking
                      I/O operations, making it highly scalable and suitable for
                      building lightweight and efficient server-side
                      applications. Express, as a minimalistic web framework,
                      complements Node.js by providing a straightforward and
                      flexible way to handle routes and middleware.
                    </li>
                    <li>
                      As for assigning sprints and managing the project, a
                      suitable platform would be Jira. Jira is a widely used
                      project management tool that enables teams to plan, track,
                      and collaborate on tasks and sprints. It provides features
                      for creating user stories, assigning tasks, tracking
                      progress, and managing backlogs, making it an ideal choice
                      for agile software development.
                    </li>

                    <li>
                      For team communication, the best methodology would be
                      Agile, specifically the Scrum framework. Scrum promotes
                      iterative development, frequent feedback, and continuous
                      improvement. It emphasizes close collaboration and
                      effective communication within cross-functional teams.
                      Daily stand-up meetings, sprint planning, sprint reviews,
                      and retrospectives are some of the key practices in Scrum
                      that foster transparency, accountability, and teamwork.
                      Tools like Slack or Microsoft Teams can be used for
                      real-time communication and collaboration among team
                      members
                    </li>
                  </ol>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionFourTheory;
