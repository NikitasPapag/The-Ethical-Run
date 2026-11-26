# The Ethical Run

An interactive web platform and 2D educational game developed to evaluate whether Socratic dialogue with a large language model can help students understand and apply moral philosophy frameworks.

This project was created as part of a diploma thesis at the Department of Computer Engineering and Informatics, University of Patras. This public repository hosts the experiment version of the game, made to evaluate its educational efficacy. You can access this version on https://the-ethical-run.onrender.com and the full game on https://nikitaspapag.itch.io/the-ethical-run.

## Overview

The Ethical Run combines an endless-runner arcade game with a pre-test/post-test experimental workflow. Participants select one of three ethical traditions (Utilitarianism, Deontology, or Virtue Ethics) and evaluate real-world ethical dilemmas involving artificial intelligence in academia. 

Between platforming segments, players enter portals to discuss scenarios with an AI tutor ("The Moral Guide"). Rather than giving direct answers, the tutor evaluates the player's reasoning against the chosen ethical framework and uses Socratic questioning to guide them toward a well-supported argument.

## Study Workflow

1. **Informed Consent & Profiling:** Participants review the study protocol, select a moral framework, and provide basic non-identifying demographic information.
2. **Pre-Game Evaluation:** Participants complete four multiple-choice baseline scenarios to establish their initial understanding of the selected framework.
3. **Gameplay & Socratic Tutoring:** Players navigate obstacles, collect batteries, and resolve four progressive ethical dilemmas (ranging from Easy to Hard) through free-text dialogue with the AI tutor. Batteries can be spent on hints, though using a hint forfeits progress on that scenario, and using three hints disables further battery collection.
4. **Post-Game Evaluation:** Participants complete four new ethical dilemmas under the same framework to measure learning gains.
5. **System Feedback:** Affective response and system usability are recorded using Self-Assessment Manikin (SAM) sliders for valence and arousal, followed by the 16-item Chatbot Usability Questionnaire (CUQ).

## Architecture

* **Frontend Questionnaires:** HTML, CSS, and vanilla JavaScript interfaces styled to match the game's retro aesthetic, recording per-stage response times and user inputs.
* **Game Client:** Built with KAPLAY (formerly Kaboom.js) and bundled with Vite.
* **Backend & Data Collection:** Node.js and Express server handling session state, rotating API key proxy requests to Groq (`openai/gpt-oss-120b`), local JSON logging, MongoDB Atlas synchronization, and CSV metric exports for statistical analysis.

## Credits

* **Author:** Nikitas Papangelopoulos
* **Supervisor:** Andreas Komninos
* **Institution:** Computer Engineering and Informatics Department, University of Patras
