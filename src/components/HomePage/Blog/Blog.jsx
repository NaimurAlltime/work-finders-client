const Blog = () => {
  return (
    <div
      className="mt-20"
      id="blog"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <h2 className="text-4xl font-semibold text-center mb-5">Blog</h2>
      <div className="w-full md:flex gap-12 mt-4">
        <div className="w-1/2">
          <p className="text-2xl">
            <span className="text-2xl font-semibold">Question-1:</span>What is
            the difference between state and props?
          </p>
          <p className="text-justify">
            <span className="text-2xl font-semibold">Answer: </span>
            Props is the shorthand for Properties in React. They are read-only
            components. They are always passed down from parent child components
            of application. A child component can never send a prop back to the
            parent component.
            <br />
            State, on the other hand, is an object that holds the data of a
            component that can change over time. It can be updated using the
            setState() method and is used to control the behaviour and rendering
            of a component.
          </p>
        </div>
        <div className="w-1/2">
          <p className="text-2xl">
            <span className="text-2xl font-semibold">Question-2:</span> What is
            the virtual DOM and how does it work?
          </p>
          <p className="text-justify">
            <span className="text-2xl font-semibold">Answer: </span>
            Virtual DOM is a React uses exists which is like a lightweight copy
            of the actual DOM(a virtual representation of the DOM). So for every
            object that exists in the original DOM, there is an object for that
            in React Virtual DOM. It is exactly the same, but it does not have
            the power to directly change the layout of the document.
            Manipulating DOM is slow, but manipulating Virtual DOM is fast as
            nothing gets drawn on the screen. So each time there is a change in
            the state of our application.
          </p>
        </div>
      </div>
      <div className="w-full md:flex gap-12 mt-4">
        <div className="w-1/2">
          <p className="text-2xl">
            <span className="text-2xl font-semibold">Question-3:</span> What is
            the meaning of JSX?
          </p>
          <p className="text-justify">
            <span className="text-2xl font-semibold">Answer: </span>
            JavaScript XML is abbreviated as JSX. React uses JSX to bring out
            the essence of JavaScript and its full potential. JSX even exposes
            HTML and JavaScript’s simple syntax. This function ensures that the
            generated HTML file is easily readable, improving the application’s
            overall performance.
          </p>
        </div>
        <div className="w-1/2">
          <p className="text-2xl">
            <span className="text-2xl font-semibold">Question-4:</span> What is
            React Router?
          </p>
          <p className="text-justify">
            <span className="text-2xl font-semibold">Answer: </span>
            React Router is a powerful routing library built on React, which
            helps in adding new screens and flows to the application. It
            maintains a structure and behavior and is used for developing single
            page web applications. React Router has a simple API.
          </p>
        </div>
      </div>
      <div className="w-full md:flex gap-12 mt-4">
        <div className="w-1/2">
          <p className="text-2xl">
            <span className="text-2xl font-semibold">Question-5:</span> What is
            Redux?
          </p>
          <p className="text-justify">
            <span className="text-2xl font-semibold">Answer: </span>
            Redux is one of the most trending libraries for front-end
            development in today’s marketplace. It is a predictable state
            container for JavaScript applications and is used for the entire
            applications state management.
          </p>
        </div>
        <div className="w-1/2">
          <p className="text-2xl">
            <span className="text-2xl font-semibold">Question-6:</span> What is
            the use of refs?
          </p>
          <p className="text-justify">
            <span className="text-2xl font-semibold">Answer: </span>
            he ref is used to return a reference to the element. They should be
            avoided in most cases, however, they can be useful when you need a
            direct access to the DOM element or an instance of a component.
          </p>
        </div>
      </div>
      <div className="w-full md:flex gap-12 mt-4">
        <div className="w-1/2">
          <p className="text-2xl">
            <span className="text-2xl font-semibold">Question-7:</span> What is
            Node.js?
          </p>
          <p className="text-justify">
            <span className="text-2xl font-semibold">Answer: </span>
            Node. js is an open-source, cross-platform JavaScript runtime
            environment for running web applications outside the clients
            browser. Ryan Dahl developed it in 2009, and its latest iteration,
            version 15.14, was released in April 2021.
          </p>
        </div>
        <div className="w-1/2">
          <p className="text-2xl">
            <span className="text-2xl font-semibold">Question-8:</span> Why is
            Express.js used?
          </p>
          <p className="text-justify">
            <span className="text-2xl font-semibold">Answer: </span>
            It is used for designing and building web applications quickly and
            easily. Node JS Express is a widely used framework built using
            Node.js. Express.js uses a management point that controls data flow
            between servers and server-side applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
