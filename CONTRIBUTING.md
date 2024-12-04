# Contributing to QuizApp Backend

Thank you for considering contributing to QuizApp Backend! Your help is greatly appreciated. Below are some guidelines to get you started.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [How Can I Contribute?](#how-can-i-contribute)
    - [Reporting Bugs](#reporting-bugs)
    - [Feature Requests](#feature-requests)
    - [Improving Documentation](#improving-documentation)
    - [Submitting Changes](#submitting-changes)
3. [Development Setup](#development-setup)
4. [Pull Request Process](#pull-request-process)

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [bidishaabanik@gmail.com](mailto:bidishaabanik@gmail.com).

## How Can I Contribute?

### Reporting Bugs

If you find a bug in the project, please open an issue [here](https://github.com/bidisha-15/Quiz-app-backend/issues) and include:

- A clear and descriptive title.
- Steps to reproduce the issue.
- Any relevant logs or screenshots.
- The environment where the issue occurs (OS, Node.js version, MongoDB version, etc.).

### Feature Requests

We welcome new feature requests. If you have an idea, please open an issue [here](https://github.com/bidisha-15/Quiz-app-backend/issues) and provide:

- A clear and descriptive title.
- A detailed description of the feature.
- Any examples or mockups that might help illustrate your idea.

### Improving Documentation

Documentation improvements are always welcome! If you see something that can be improved, feel free to make changes and submit a pull request.

### Submitting Changes

If you have improvements or fixes for the code, please follow the steps below:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request and provide a detailed description of your changes.

## Development Setup

To get started with development, follow these steps:

1. **Fork the repository**:
   - Go to the repository on GitHub and click the "Fork" button.

2. **Clone your fork**:
   ```bash
   git clone https://github.com/yourusername/quizapp-backend.git
   cd quizapp-backend
   
3. **Install dependencies**:

- Make sure you have Node.js and MongoDB installed.
- Install the required npm packages:
  ```bash
  npm install
  
4. **Set up environment variables**:

- Create a `.env` file in the root directory and add your environment variables. An example `.env` file might look like this:
  ```bash
  MONGODB_URI=mongodb://localhost:27017/quizapp
  PORT=3000
  
5. **Run the project**:

- Start the server:
  ```bash
  npm start
  
6. **Run tests**:

- To run tests:
  ```bash
  npm test
  
## Pull Request Process

1. Ensure your code follows the project's coding standards.
2. Ensure that you have added necessary tests for your changes.
3. Ensure that all tests pass.
4. Submit your pull request, describing the changes and the motivation behind them.
5. A project maintainer will review your pull request and provide feedback.

##

Thank you for contributing to QuizApp Backend! We look forward to working with you.
