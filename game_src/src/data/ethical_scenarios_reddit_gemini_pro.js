export const scenarios = [
    {
        "id": "S1",
        "ethics": "Utilitarianism",
        "moral_theme": "Fairness and Proportionality",
        "dilemma_type": "Procedural fairness",
        "text": "Professor Davis teaches a university course with 800 students. He has access to an AI " +
                "grading tool. The AI evaluates student essays and assigns grades in 3 hours with a 95% " +
                "accuracy rate. Manual grading requires 60 hours. University Assessment Rules state that " +
                "professors must personally read every student submission. Davis has a 20-year history of " +
                "reading each paper, an established habit he maintains to practice professional mentorship.\n\n" +
                "Davis must choose a grading procedure. The first option is to run all essays through the " +
                "AI, accepting the automated grades for 95% of the students and manually reading only the " +
                "5% of essays the system flags for review. This procedure completes the grading 14 days " +
                "faster, allowing the 800 students to use their course transcripts to meet scheduled " +
                "internship application deadlines. The second option is to manually read every essay " +
                "according to the Rules, applying the same human evaluation procedure to all 800 students. " +
                "This choice aligns with his long-standing grading habits but extends the grading timeframe " +
                "by 14 days, causing the students to miss the internship deadlines.\n\n" +
                "How should this dilemma be resolved using the principles of Utilitarianism?"
    },
    {
        "id": "S2",
        "ethics": "Deontology",
        "moral_theme": "Fairness and Proportionality",
        "dilemma_type": "Procedural fairness",
        "text": "Professor Clark directs a university department with 800 students. The university’s " +
                "Academic Procedures Handbook mandates that faculty must conduct a manual review and a " +
                "student interview before applying academic penalties. Clark uses an AI analysis tool to " +
                "grade final assignments, and the system flags 50 submissions for unapproved code reuse. " +
                "The software documentation shows a 98 percent accuracy rate for these flags. Processing " +
                "the 50 submissions through the handbook's mandated procedure will delay the graduation " +
                "date for 400 students by three weeks. Clark has a record of prioritizing professional " +
                "integrity and consistency in administrative routines.\n\n" +
                "Clark must choose how to finalize the grades. One option is to bypass the handbook's " +
                "manual review and interview protocols, using the AI tool to assign penalties automatically " +
                "so that all 400 students graduate on the scheduled date. The alternative is to execute " +
                "the exact procedure required by the Academic Procedures Handbook by conducting the 50 " +
                "manual reviews and interviews, which results in the three-week graduation delay.\n\n" +
                "How should this dilemma be resolved using the principles of Deontology?"
    },
    {
        "id": "S3",
        "ethics": "Virtue Ethics",
        "moral_theme": "Fairness and Proportionality",
        "dilemma_type": "Procedural fairness",
        "text": "Professor Lin teaches a course with 450 students. Lin uses an AI detection software to " +
                "scan final essays. The software flags 30 students for using AI text generators. The " +
                "software documentation shows a 98% accuracy rate based on 10,000 test cases. Processing " +
                "automatic zero grades for these 30 students allows Lin to submit the final grades for the " +
                "420 unflagged students five days before the deadline. Manually cross-checking the 30 " +
                "flagged essays and holding individual student meetings requires 40 hours of Lin's " +
                "schedule. University Academic Rules state that instructors must personally evaluate " +
                "all evidence and provide a direct student hearing before applying academic penalties. Over " +
                "a twelve-year career, Lin has built a practice of directly mentoring students through " +
                "academic errors to foster their scholarly development.\n\n" +
                "Lin must choose between applying the automated software results to finalize course grades, " +
                "or halting the grading process to execute the manual reviews and hearings for the 30 " +
                "flagged students.\n\n" +
                "How should this dilemma be resolved using the principles of Virtue Ethics?"
    },
    {
        "id": "S4",
        "ethics": "Utilitarianism",
        "moral_theme": "Fairness and Proportionality",
        "dilemma_type": "Distributive fairness",
        "text": "State University has 500 licenses for a new AI learning platform. The university committee " +
                "chair, Dr. Aris, must distribute these licenses. Dr. Aris has a 20-year career focused on " +
                "academic mentorship, building student study habits, and demonstrating professional " +
                "integrity. Pilot testing shows that giving the 500 licenses to first-year math students " +
                "results in a 15-point average test score increase and prevents 200 student dropouts. " +
                "Alternatively, giving the 500 licenses to graduate engineering students decreases their " +
                "data analysis time by 40% and produces 50 additional published research papers per year. " +
                "University Policy states that academic resources must be provided to students " +
                "regardless of their academic standing. Additionally, the university's data privacy " +
                "regulations require all third-party software to hide student identification numbers. The " +
                "AI platform configured for the graduate students automatically hides these numbers, while " +
                "the configuration for the first-year students transmits visible student ID numbers to the " +
                "software developer.\n\n" +
                "Dr. Aris must make a final allocation decision for the 500 licenses.\n\n" +
                "How should this dilemma be resolved using the principles of Utilitarianism?"
    },
    {
        "id": "S5",
        "ethics": "Deontology",
        "moral_theme": "Fairness and Proportionality",
        "dilemma_type": "Distributive fairness",
        "text": "Dr. Hayes is a computer science professor with a fifteen-year record of dedicating her " +
                "scheduled office hours to academic mentorship. Her department purchased 500 licenses for " +
                "an AI coding assistant. Historical data from pilot programs indicates that students using " +
                "this AI complete assignments 40% faster and score 18 points higher on final exams. There " +
                "are 2,000 students enrolled in the introductory courses. Hayes calculates that " +
                "distributing the 500 licenses exclusively to the students currently failing the course " +
                "will raise the department's total passing rate by 22%. The university’s Student Resource " +
                "Charter mandates that all students paying the standard technology fee receive identical " +
                "access to all digital learning materials. Furthermore, the university's privacy " +
                "regulations prohibit faculty from using students' current grade data to determine software " +
                "eligibility.\n\n" +
                "Hayes must decide how to assign the AI licenses. She can distribute them to " +
                "the 500 failing students to increase the overall passing metrics, or she can run a random " +
                "lottery for all 2,000 enrolled students to follow the access and privacy mandates.\n\n" +
                "How should this dilemma be resolved using the principles of Deontology?"
    },
    {
        "id": "S6",
        "ethics": "Virtue Ethics",
        "moral_theme": "Fairness and Proportionality",
        "dilemma_type": "Distributive fairness",
        "text": "A university committee has 50 AI data-analysis licenses to distribute among 200 " +
                "graduate students. A pilot study demonstrates that allocating all licenses to the " +
                "computer science department produces 25 additional peer-reviewed papers and $400,000 in " +
                "grant funding per academic year. Distributing the licenses across all departments yields 4 " +
                "papers and $15,000 in funding. University Policy mandates that administrators must " +
                "provide uniform institutional resource access to all enrolled students. Professor Chen " +
                "leads the committee. Her professional record is built on daily mentorship, scientific " +
                "honesty, and cultivating habits of scholarly diligence in young researchers.\n\n" +
                "She must select a distribution method. She can assign the 50 licenses strictly to the " +
                "computer science department to generate the larger number of publications and grant dollars. " +
                "Alternatively, she can distribute the licenses via a campus-wide lottery to comply with " +
                "the uniform access policy and allow students from all disciplines to practice using the AI " +
                "tool in their research routines.\n\n" +
                "How should this dilemma be resolved using the principles of Virtue Ethics?"
    },
    {
        "id": "S7",
        "ethics": "Utilitarianism",
        "moral_theme": "Fairness and Proportionality",
        "dilemma_type": "Reciprocal fairness",
        "text": "Professor Lin instructs a science class of 200 students. Lin introduces an AI tutoring " +
                "program that processes past student essays to generate study guides. Lin asks the students " +
                "to upload 5 previous essays to the system. Data from the software developer indicates that " +
                "users score exactly 14 points higher on finals and save 3 hours of study time weekly. Lin " +
                "designs the syllabus to emphasize professional integrity and the habit of mutual " +
                "collaboration. Fifty students refuse to upload their essays, invoking the University " +
                "Privacy Charter, which grants individuals the right to keep personal records out of shared " +
                "databases. The 150 students who uploaded their essays ask Lin to limit AI access to " +
                "contributors, stating the program relies on their submitted texts. The University Faculty " +
                "Code states that teachers have a duty to distribute course materials equally to all enrolled students.\n\n" +
                "Lin must decide whether to open the AI to all 200 students or restrict it to the 150 contributors. " +
                "Opening the AI to everyone will give the 50 non-contributors the 14-point score increase and the 3-hour " +
                "time reduction. Restricting the AI creates a system where students only receive software " +
                "benefits if they provide the requested data.\n\n" +
                "How should this dilemma be resolved using the principles of Utilitarianism?"
    },
    {
        "id": "S8",
        "ethics": "Deontology",
        "moral_theme": "Fairness and Proportionality",
        "dilemma_type": "Reciprocal fairness",
        "text": "Professor Lee, an educator with a twelve-year record of professional integrity and " +
                "established work habits, uses an external AI grading tool to evaluate 500 student essays, " +
                "reducing grading time by forty hours. The software is provided by a research consortium " +
                "under a reciprocal user agreement. This agreement mandates that users must upload their " +
                "processed text data back to the consortium to maintain access and train the AI system. The " +
                "university maintains a data privacy policy requiring staff to obtain signed consent forms " +
                "from students before sharing coursework with external organizations. Professor Lee does " +
                "not possess signed consent forms for these 500 essays.\n\n" +
                "The consortium sends a required system prompt for Professor Lee to submit the essays. If " +
                "Professor Lee uploads the essays, the action fulfills the reciprocal agreement and ensures " +
                "the department retains access to the tool, which saves faculty 200 hours of administrative " +
                "labor annually. If Professor Lee declines to upload the essays, the action complies with " +
                "the university privacy policy but breaches the reciprocal agreement, causing the consortium " +
                "to revoke the department's software access.\n\n" +
                "How should this dilemma be resolved using the principles of Deontology?"
    },
    {
        "id": "S9",
        "ethics": "Virtue Ethics",
        "moral_theme": "Fairness and Proportionality",
        "dilemma_type": "Reciprocal fairness",
        "text": "Graduate students Leo and Maya agree to split the literature review for a shared research " +
                "project. They decide each person will summarize 50 academic articles. Leo reads his " +
                "assigned 50 articles and types his summaries, spending 40 hours. Maya uses an AI text- " +
                "processing tool to analyze her 50 articles, generating her summaries in 2 hours. Both sets " +
                "of summaries are 60 pages long and lead to a 20% reduction in the time needed to design " +
                "their experiments. University Policy states that co-authors must provide equivalent " +
                "intellectual labor to shared academic publications. Maya suggests they use the AI tool to " +
                "process the final 100 articles required for the project. Leo declines to accept Maya's AI- " +
                "generated summaries and states he will dissolve their partnership. He asserts that " +
                "manually reading texts builds the analytical habits and disciplinary knowledge required " +
                "for a career as a researcher.\n\n" +
                "Maya responds that she fulfilled the exact terms of their agreement by providing 50 summaries " +
                "and asks to proceed using the software. Leo insists Maya must complete her half of the work " +
                "manually before he will exchange any more research materials.\n\n" +
                "How should this dilemma be resolved using the principles of Virtue Ethics?"
    },
    {
        "id": "S10",
        "ethics": "Utilitarianism",
        "moral_theme": "Fairness and Proportionality",
        "dilemma_type": "Behavioral underreaction",
        "text": "Dr. Aris manages the university scholarship committee, which uses an AI tool to evaluate " +
                "5,000 applications. The university charter mandates that staff must immediately suspend " +
                "any automated system that produces biased outcomes. A mid-cycle audit reveals the AI is " +
                "scoring applicants from urban high schools 10% lower than applicants from suburban schools " +
                "with identical grades. Dr. Aris calculates that suspending the AI tool and reverting to " +
                "manual review will delay scholarship disbursements by three months, causing 300 students " +
                "to lose their ability to pay tuition for the upcoming semester. If Dr. Aris ignores the " +
                "audit and allows the system to finish the cycle, the scholarships will be distributed on " +
                "time, but the urban applicants will receive a disproportionately low share of the funds.\n\n" +
                "Dr. Aris must choose whether to suspend the AI immediately or allow it to finish the current " +
                "cycle before implementing corrections.\n\n" +
                "How should this dilemma be resolved using the principles of Utilitarianism?"
    },
    {
        "id": "S11",
        "ethics": "Deontology",
        "moral_theme": "Fairness and Proportionality",
        "dilemma_type": "Behavioral underreaction",
        "text": "Dr. Lin directs the university admissions department and uses an AI software to filter " +
                "10,000 student applications. After the software processes the first 2,000 files, data logs " +
                "show the AI assigns a score 3 percent below the baseline to applicants from rural zip " +
                "codes when compared to applicants from urban zip codes with identical grades. " +
                "The university's charter states that administrators possess a duty to suspend any evaluation " +
                "system that incorporates geographic location as a scoring variable. The department staff " +
                "review the data and note that suspending the software requires a manual review of the " +
                "remaining 8,000 applications, delaying the admissions schedule by three weeks. The staff " +
                "advise continuing the use of the AI for the current cycle, documenting that the 3 percent " +
                "scoring variance alters the final admission status for exactly 12 students out of the " +
                "total applicant pool.\n\n" +
                "Dr. Lin must decide whether to authorize the staff to finish the " +
                "cycle with the AI, or invoke the charter to halt the software and begin manual grading.\n\n" +
                "How should this dilemma be resolved using the principles of Deontology?"
    },
    {
        "id": "S12",
        "ethics": "Virtue Ethics",
        "moral_theme": "Fairness and Proportionality",
        "dilemma_type": "Behavioral underreaction",
        "text": "Professor Hayes uses an AI text-analysis tool to scan final projects. The AI system flags " +
                "15 out of 50 submissions for AI assistance. The University Academic Handbook " +
                "requires instructors to forward all AI-flagged assignments to the Disciplinary Board for a " +
                "mandatory review. The Board takes exactly 21 days to process cases. Withholding the grades " +
                "for this period will prevent the entire class of 50 students from receiving their degrees " +
                "on graduation day, and it will result in the automatic cancellation of 12 students' signed " +
                "employment contracts. Hayes has a 20-year record of resolving academic issues through " +
                "direct dialogue and prioritizing student mentorship over administrative procedures.\n\n" +
                "Hayes must select one of two courses of action. He can dismiss the AI flags entirely and grade " +
                "all 50 assignments using his standard rubric without reporting the 15 cases. Alternatively, he can " +
                "submit the 15 flagged projects to the Disciplinary Board and withhold the grades.\n\n" +
                "How should this dilemma be resolved using the principles of Virtue Ethics?"
    },
    {
        "id": "S13",
        "ethics": "Utilitarianism",
        "moral_theme": "Fairness and Proportionality",
        "dilemma_type": "Behavioral overreaction",
        "text": "Professor Lin uses an AI proctoring software for a final exam administered to 500 " +
                "students. The software tracks eye movements to execute the university’s binding Academic " +
                "Integrity Policy, which mandates that faculty apply the system's automated penalties " +
                "without manual alteration. Department records indicate the software identifies rule " +
                "violations with an 85% accuracy rate and reduces faculty monitoring time by 200 hours per " +
                "semester. The software is programmed to automatically terminate an exam and assign a score " +
                "of zero if a student's eyes look away from the screen for more than five consecutive " +
                "seconds. During the test, the software terminates the exams of four students who looked " +
                "off-screen for six seconds. The students report they were looking at a blank wall to " +
                "process a question. Lin watches the recorded video and notes no unauthorized materials in " +
                "the room. Lin has a documented professional record of prioritizing academic mentorship and " +
                "cultivating an individualized learning environment.\n\n" +
                "Following the software's protocol " +
                "finalizes the grades for the other 496 students within ten minutes. Overriding the " +
                "software requires Lin to breach the university policy and suspends the release of all 500 " +
                "exam scores for three weeks while an administrative committee investigates the system bypass.\n\n" +
                "How should this dilemma be resolved using the principles of Utilitarianism?"
    },
    {
        "id": "S14",
        "ethics": "Deontology",
        "moral_theme": "Fairness and Proportionality",
        "dilemma_type": "Behavioral overreaction",
        "text": "Professor Vance uses a required AI text-analysis tool in his university courses. The " +
                "university's academic integrity policy dictates that faculty members must submit all AI- " +
                "generated flags to the Academic Review Board. The Board protocol mandates an automatic " +
                "one-semester suspension for any reported AI violation. Student Lee submits a 300-word " +
                "reading response. The AI tool flags the document. Lee provides a screen recording " +
                "confirming the use of an AI program to generate two transition words in the final " +
                "sentence. The reading response accounts for one percent of the course grade.\n\n" +
                "Vance must " +
                "select a course of action. He can submit the report to the Academic Review Board, " +
                "complying with the faculty handbook and resulting in Lee's suspension. Alternatively, " +
                "Vance can delete the flag from the system and evaluate the assignment based on the " +
                "remaining text. The faculty contract explicitly prohibits instructors from altering or " +
                "deleting AI system logs.\n\n" +
                "How should this dilemma be resolved using the principles of " +
                "Deontology?"
    },
    {
        "id": "S15",
        "ethics": "Virtue Ethics",
        "moral_theme": "Fairness and Proportionality",
        "dilemma_type": "Behavioral overreaction",
        "text": "Professor Lin teaches an undergraduate biology course of 200 students. After finding that " +
                "18 students used an AI text generator for a 100-word weekly reflection assignment, Lin " +
                "must decide how to respond.\n\n" +
                "One option is to enact a policy that bans all laptops in the " +
                "lecture hall and automatically fails any student whose future submissions trigger a 50% or " +
                "higher match on the department’s AI scanning tool. Enacting this policy aligns with " +
                "University rules, which state instructors have a duty to report unauthorized software " +
                "use to the academic board and apply standard syllabus sanctions. Data from the department " +
                "shows that an automatic failure policy decreases the overall course pass rate by 14% and " +
                "impacts the 90% of students who use digital devices for note-taking. An alternative option " +
                "is for Lin to hold individual meetings with the 18 students to discuss their writing and " +
                "verbally amend the syllabus to specify acceptable AI use, without banning devices or using " +
                "automated failure protocols. Choosing this route requires Lin to allocate 20 additional " +
                "hours for grading and meetings over the next month. Lin’s teaching record over the past " +
                "decade is built on a practice of addressing student actions through direct mentorship, " +
                "aiming to cultivate academic honesty and intellectual resilience.\n\n" +
                "How should this dilemma be " +
                "resolved using the principles of Virtue Ethics?"
    },
    {
        "id": "S16",
        "ethics": "Utilitarianism",
        "moral_theme": "Feelings",
        "dilemma_type": "Private emotion",
        "text": "Professor Aris uses an AI text tool to grade 600 student essays per semester. The software " +
                "includes a feature that maps sentence structure to private emotional states. The AI " +
                "generated a report identifying 42 students who are suppressing feelings of grief. Data " +
                "from the software developer shows that outreach based on this alert prevents 14 academic " +
                "withdrawals and 8 medical emergencies annually. Aris can submit the list of 42 names to " +
                "the university counseling center for outreach. University Policy mandates that faculty " +
                "obtain signed consent forms before sharing emotional data, ensuring student privacy " +
                "rights. Aris did not collect these forms. Deleting the report aligns with the university " +
                "rules and reflects Aris's habits of professional integrity and transparent communication. " +
                "Submitting the report requires Aris to bypass the consent mandate.\n\n" +
                "Aris must choose " +
                "whether to send the names to the counseling center or delete the AI report.\n\n" +
                "How should " +
                "this dilemma be resolved using the principles of Utilitarianism?"
    },
    {
        "id": "S17",
        "ethics": "Deontology",
        "moral_theme": "Feelings",
        "dilemma_type": "Private emotion",
        "text": "Dr. Hayes teaches an online university course using an AI tutoring platform. A recent " +
                "software update allows the AI to use webcam inputs and typing speeds to generate a private " +
                "emotional state score for each student. The University Data Privacy Charter states that " +
                "academic staff are prohibited from viewing or acting on student psychological data without " +
                "a signed, secondary consent form. The charter assigns all mental health monitoring duties " +
                "exclusively to the university medical clinic. While reviewing system logs, Dr. Hayes sees " +
                "the AI has assigned a student named Leo an emotional distress score of 92 out of 100. Leo " +
                "has not signed the secondary consent form for emotional data tracking.\n\n" +
                "Dr. Hayes has two " +
                "available actions. He can email Leo to offer an exam extension and provide a link to the " +
                "medical clinic, acting on the AI's emotional data. Alternatively, Dr. Hayes can ignore the " +
                "AI score and proceed with the standard course schedule. Contacting Leo uses the data to " +
                "address the recorded emotional state but violates the University Data Privacy Charter " +
                "and faculty duty boundaries regarding unconsented psychological data. Ignoring the score " +
                "follows the university privacy charter and consent rules but leaves the AI's emotional " +
                "data unaddressed.\n\n" +
                "How should this dilemma be resolved using the principles of Deontology?"
    },
    {
        "id": "S18",
        "ethics": "Virtue Ethics",
        "moral_theme": "Feelings",
        "dilemma_type": "Private emotion",
        "text": "Professor Vance teaches a university writing course. He uses a grading AI that generates a " +
                "hidden emotional distress score based on the text of students' weekly reflective essays. " +
                "During the first semester of using this feature, Vance granted academic extensions to the " +
                "12 students flagged by the AI. These 12 students showed a 20% increase in their final " +
                "grades, and the class dropout rate dropped to 0%. University Policy dictates " +
                "that faculty must not extract psychological data from coursework without written consent, " +
                "and the administrative handbook specifies a mandatory duty to uphold student data privacy " +
                "rights.\n\n" +
                "Vance must decide whether to retain or disable the AI's emotional scoring feature. " +
                "Retaining the feature allows him to modify course deadlines based on the generated scores " +
                "without requiring students to articulate their private emotions. Disabling the feature " +
                "requires him to base deadline modifications solely on students choosing to communicate " +
                "their feelings. He considers whether using software to monitor internal states aligns with " +
                "his professional integrity. He reflects on whether relying on the algorithm builds habits " +
                "of active communication, and how this practice shapes his character as a mentor " +
                "responsible for developing direct interpersonal relationships with his students.\n\n" +
                "How " +
                "should this dilemma be resolved using the principles of Virtue Ethics?"
    },
    {
        "id": "S19",
        "ethics": "Utilitarianism",
        "moral_theme": "Feelings",
        "dilemma_type": "Emotional underreaction",
        "text": "Professor Lin teaches a psychology course with 300 students. To manage messages, she uses " +
                "an AI system that reads student emails and writes replies. During midterms, 18 students " +
                "email Lin about documented personal crises, such as family deaths and medical " +
                "hospitalizations, requesting deadline extensions. Lin uses the AI to generate the " +
                "responses. The AI approves the extensions using direct vocabulary that states the new " +
                "deadlines but includes no words of condolence or emotional acknowledgment. Lin sends these " +
                "drafts without adding personal text. Lin states this practice aligns with her established " +
                "habit of professional detachment and ensures she treats every student with exact " +
                "uniformity. Using the AI allows Lin to answer all emails in two hours, reducing her " +
                "administrative workload by 15 hours per week. Department records indicate that providing " +
                "academic decisions within 24 hours increases overall student graduation rates by 12 " +
                "percent. However, University Directive states that faculty members have a strict duty " +
                "to personally manage any correspondence containing protected student health information. " +
                "Department peers state that using an automated system for student grief fails to model the " +
                "character, compassion, and active mentorship expected of university educators.\n\n" +
                "Lin must " +
                "choose whether to keep using the AI for these disclosures or to write the replies herself.\n\n" +
                "How should this dilemma be resolved using the principles of Utilitarianism?"
    },
    {
        "id": "S20",
        "ethics": "Deontology",
        "moral_theme": "Feelings",
        "dilemma_type": "Emotional underreaction",
        "text": "Dr. Aris manages the automated academic advising software at a state university. The AI " +
                "system generates and emails academic dismissal notices to students based on grade data. " +
                "Today, the AI drafted a dismissal notice for a student who missed final exams due to a " +
                "documented medical hospitalization. The AI's email states: \"Your GPA is 1.2. You are " +
                "dismissed. System access ends in 24 hours.\" It includes no acknowledgment of the medical " +
                "documentation and provides no wellness resources. Dr. Aris evaluates this output. His " +
                "15-year career record is characterized by habits of personal student mentorship and " +
                "individualized communication. University Policy dictates that staff members must not " +
                "alter AI-generated academic standing notices, a mandate established to ensure procedural " +
                "parity across all 12,000 enrolled students. Sending the AI notices without human editing " +
                "allows the department to process 450 cases per day and reduces staff overtime expenditures " +
                "by $12,000 per semester.\n\n" +
                "Dr. Aris must decide whether to intercept and rewrite the email " +
                "to include language addressing the student's specific medical situation, which violates " +
                "the university's standardization policy, or to authorize the release of the AI's original " +
                "email, which complies with the administrative mandate but delivers a data-only response to " +
                "a student returning from a hospital stay.\n\n" +
                "How should this dilemma be resolved using the " +
                "principles of Deontology?"
    },
    {
        "id": "S21",
        "ethics": "Virtue Ethics",
        "moral_theme": "Feelings",
        "dilemma_type": "Emotional underreaction",
        "text": "Dr. Aris teaches a lecture course with 400 enrolled students. To manage communication, " +
                "Aris uses an AI text tool to draft replies to student emails. The AI saves Aris 15 hours " +
                "per week and achieves a 100% response rate within 2 hours. This complies with University " +
                "Policy, which dictates that faculty must answer all student messages within 24 hours. " +
                "Over a 12-year career, Aris has formed a habit of offering personalized mentorship and " +
                "developing professional integrity in academic relationships. On Tuesday, a student named " +
                "Leo emailed Aris to report that his mother died that morning and requested a midterm " +
                "extension. Aris inputted the email into the AI. The AI generated a one-line reply: " +
                "\"Extension granted for 5 days per syllabus section.\" Aris read the text, verified the " +
                "syllabus rule, and sent the email without adding any words regarding the bereavement. Leo " +
                "replied that he was withdrawing from the course, stating the exchange contained no " +
                "personal acknowledgment of his situation.\n\n" +
                "Aris must choose between continuing to send the " +
                "AI’s generated outputs or pausing the AI to manually write replies for emails containing " +
                "life events. Keeping the AI workflow ensures Aris processes 150 emails daily within the " +
                "university's 24-hour mandate and applies extension rules equally to all 400 students. " +
                "Reverting to manual typing for these specific emails requires 10 additional hours of labor " +
                "per week and creates a probability of violating Policy during exam weeks, but it allows " +
                "Aris to maintain the established practice of cultivating individualized student " +
                "mentorship.\n\n" +
                "How should this dilemma be resolved using the principles of Virtue Ethics?"
    },
    {
        "id": "S22",
        "ethics": "Utilitarianism",
        "moral_theme": "Feelings",
        "dilemma_type": "Emotional overreaction",
        "text": "Professor Lin teaches a course with 300 enrolled students. He uses an AI grading assistant " +
                "to provide preliminary feedback on essays. The software identifies structural errors and " +
                "lists text corrections. Student A receives an AI report stating that 60% of their essay " +
                "lacks logical coherence. Upon reading this, Student A cries in Professor Lin's office for " +
                "45 minutes and states an intention to withdraw from the university. Student A misses 4 " +
                "days of scheduled classes following this event. Department data shows the AI tool reduces " +
                "faculty grading time by 40 hours per week and has increased overall student passing rates " +
                "by 18% over two semesters. University Policy mandates that faculty must not manually " +
                "alter automated feedback reports, a rule established to enforce institutional " +
                "standardization and data privacy protocols. Professor Lin has a career record of " +
                "prioritizing academic mentorship and educational integrity.\n\n" +
                "He must choose between two " +
                "actions. Action one is to apply the policy, leave the AI feedback unaltered, and provide " +
                "Student A with the contact information for campus counseling services. Action two is to " +
                "bypass the software protocol, manually adjust the vocabulary of the feedback, and grade " +
                "the paper himself. Selecting action two requires Professor Lin to apply this process to 12 " +
                "other students who reported crying after reading their reports, adding 24 hours of manual " +
                "grading to his weekly schedule.\n\n" +
                "How should this dilemma be resolved using the principles " +
                "of Utilitarianism?"
    },
    {
        "id": "S23",
        "ethics": "Deontology",
        "moral_theme": "Feelings",
        "dilemma_type": "Emotional overreaction",
        "text": "Professor Lin teaches a first-year writing course and uses a university-provided AI tool " +
                "to scan submissions for AI-generated text. The course syllabus states that papers flagged " +
                "above 20% receive a grade deduction. The AI tool flags student Alex's essay at 12%. When " +
                "Lin informs Alex of the 12% flag during office hours, Alex begins crying, " +
                "hyperventilating, and states he will drop out of the university today. Alex paces the room " +
                "and says his future career is destroyed by the AI scan. University Administrative Policy " +
                "requires instructors to submit a formal documentation form to the Academic Board for " +
                "any AI flag exceeding 10%, which initiates a mandatory four-week review process. " +
                "The Faculty Guide states instructors have a duty to pause administrative procedures if " +
                "a student displays physical signs of distress.\n\n" +
                "Lin must decide whether to file the " +
                "documentation to the Academic Board to fulfill Policy, or discard the 12% flag without " +
                "reporting it to stop Alex's crying and prevent his withdrawal from the course.\n\n" +
                "How should " +
                "this dilemma be resolved using the principles of Deontology?"
    },
    {
        "id": "S24",
        "ethics": "Virtue Ethics",
        "moral_theme": "Feelings",
        "dilemma_type": "Emotional overreaction",
        "text": "Dr. Lin uses an AI text analysis tool to monitor his online course discussion board. The " +
                "AI sends an automated alert stating a student, John, submitted a post categorized as " +
                "\"Level 4 hostility.\" Upon reading the AI notification, Dr. Lin experiences an elevated " +
                "heart rate and feelings of anger. Reacting to this emotional state, he immediately drafts " +
                "an administrative order to remove John from the course platform. Processing this removal " +
                "will impact 1 student's grade, but it will allow the remaining 149 students to proceed " +
                "with the weekly module with 0 interruptions and save Dr. Lin 4 hours of dispute mediation. " +
                "University Regulation mandates that faculty must provide students with a written " +
                "warning and a 48-hour appeal window before restricting system access. Dr. Lin has a " +
                "12-year history in academia defined by habits of patience, measured decision-making, and " +
                "constructive mentorship.\n\n" +
                "He pauses before submitting the order, evaluating whether " +
                "executing a sudden removal driven by his current emotional reaction is consistent with his " +
                "established professional character, or if he should implement the mandatory 48-hour " +
                "administrative protocol.\n\n" +
                "How should this dilemma be resolved using the principles of " +
                "Virtue Ethics?"
    },
    {
        "id": "S25",
        "ethics": "Utilitarianism",
        "moral_theme": "Harm and Offense",
        "dilemma_type": "Unintended harm",
        "text": "A university uses AI proctoring software for online exams. The administration handbook " +
                "outlines a strict duty to provide identical testing conditions for all individuals, and " +
                "the faculty charter emphasizes the professional habit of grading consistency. Over the " +
                "last academic year, the software processed 10,000 exam sessions. Server logs indicate the " +
                "system blocked outside web browser access during tests, reducing rule violations by 40% " +
                "and stopping 800 students from using unapproved materials. The AI uses camera tracking " +
                "that requires high-intensity light to register darker skin tones. Under standard room " +
                "lighting, the software failed to recognize 65 students and automatically ended their test " +
                "sessions. These 65 students received zero scores, resulting in a loss of $3,000 each in " +
                "scholarship funds and the addition of one extra semester to their degree programs. The " +
                "software provider requires 12 months to alter the light tracking parameters.\n\n" +
                "The " +
                "university must decide whether to operate the current AI software for the next 12 months " +
                "or to administer tests without browser monitoring.\n\n" +
                "How should this dilemma be resolved " +
                "using the principles of Utilitarianism?"
    },
    {
        "id": "S26",
        "ethics": "Deontology",
        "moral_theme": "Harm and Offense",
        "dilemma_type": "Unintended harm",
        "text": "Professor Miller teaches a psychology seminar and implements a new AI tool to summarize " +
                "student reflection journals. The university has a privacy policy stating instructors must " +
                "obtain written consent before submitting student texts to external software, establishing " +
                "a duty to protect student data. Miller operates the AI without collecting the consent " +
                "forms, operating under the premise that the journals hold only academic concepts. The AI " +
                "processes the texts and extracts personal medical histories from three students. The AI " +
                "automatically compiles these histories into a study guide and emails it to the class of " +
                "forty students. The three students contact Miller and report experiencing distress due to " +
                "the distribution of their medical information.\n\n" +
                "Miller must decide on his next steps. He " +
                "can report the data exposure to the university administration and issue a formal notice to " +
                "the class. University regulations state that personnel must report data exposures within " +
                "24 hours of discovery. Alternatively, Miller can email the other 37 students to request " +
                "the deletion of the study guide and shift to an offline version of the AI tool without " +
                "contacting the administration. This option attempts to remove the files from circulation " +
                "while avoiding a university inquiry.\n\n" +
                "How should this dilemma be resolved using the " +
                "principles of Deontology?"
    },
    {
        "id": "S27",
        "ethics": "Virtue Ethics",
        "moral_theme": "Harm and Offense",
        "dilemma_type": "Unintended harm",
        "text": "Professor Hayes teaches a writing course with 300 students. He uses a university-approved " +
                "AI grading tool that evaluates grammar. The tool reduces his weekly grading time by 20 " +
                "hours and returns feedback to students four days faster. After the first month, Hayes " +
                "notes that the AI has lowered the scores of 18 students who speak English as a second " +
                "language by an average of 15%. The AI operates exactly as programmed by flagging non- " +
                "native phrasing patterns as syntax errors. The university faculty contract requires " +
                "instructors to follow the grading methods outlined in their initial syllabus and prohibits " +
                "altering evaluation systems mid-semester. Hayes has a 12-year history of prioritizing " +
                "academic mentorship and adjusting his instructional habits to foster student development.\n\n" +
                "If he continues using the AI tool as outlined in his syllabus, he complies with his " +
                "contractual duty and maintains the four-day feedback turnaround, but the 18 students will " +
                "receive the 15% grade reduction from the automated syntax flags. If he stops using the AI " +
                "tool mid-semester to grade all students manually, his actions reflect his established " +
                "professional history of supporting individual development, but he violates the faculty " +
                "contract and delays feedback by four days for all 300 students.\n\n" +
                "How should this dilemma be " +
                "resolved using the principles of Virtue Ethics?"
    },
    {
        "id": "S28",
        "ethics": "Utilitarianism",
        "moral_theme": "Harm and Offense",
        "dilemma_type": "Intentional harm",
        "text": "Professor Lin directs the university cybersecurity program. She programs an AI to " +
                "intentionally infiltrate and disable the personal laptops of 50 students during final exam " +
                "week. The AI deletes their local files and restricts their internet access for 48 hours. " +
                "Lin designs this action to require students to execute crisis-recovery protocols in a live " +
                "environment. University Directive requires faculty to obtain written consent before " +
                "accessing student-owned hardware. Lin has a 15-year career record of demonstrating " +
                "professional integrity and prioritizing transparency with her students.\n\n" +
                "She must choose " +
                "whether to deploy the AI on the personal laptops or use a simulated laboratory network. " +
                "Deploying the live AI causes data loss and hardware lockouts for 50 students. Department " +
                "metrics show that graduates trained via this live AI method prevent 98% of campus network " +
                "intrusions, protecting the financial records of 22,000 university members. Using the " +
                "simulated network complies with the Directive and maintains Lin's established habit of " +
                "honesty. However, graduates trained on the simulated network prevent 65% of network " +
                "intrusions. This lower prevention rate correlates with an average of 4,000 compromised " +
                "financial records per year.\n\n" +
                "How should this dilemma be resolved using the principles of " +
                "Utilitarianism?"
    },
    {
        "id": "S29",
        "ethics": "Deontology",
        "moral_theme": "Harm and Offense",
        "dilemma_type": "Intentional harm",
        "text": "Dr. Chen manages a university AI chatbot designed for student mental health support. The " +
                "chatbot currently outputs disconnected crisis hotline numbers to 40 users per month. To " +
                "apply a software patch that updates these numbers, Dr. Chen must extract the unredacted " +
                "chat logs of 15 students and send them to an external programming team, exposing the " +
                "students' names and medical disclosures. The University Privacy Charter " +
                "states that personnel have a mandated duty to maintain user anonymity and prohibits the " +
                "transfer of unredacted logs to external entities.\n\n" +
                "Dr. Chen can send the unredacted logs to " +
                "the programming team, exposing the personal data of the 15 students to apply the patch for " +
                "the 40 users per month. Alternatively, Dr. Chen can withhold the logs, adhering to the " +
                "duty outlined in the Privacy Charter while the chatbot continues to output disconnected " +
                "numbers.\n\n" +
                "How should this dilemma be resolved using the principles of Deontology?"
    },
    {
        "id": "S30",
        "ethics": "Virtue Ethics",
        "moral_theme": "Harm and Offense",
        "dilemma_type": "Intentional harm",
        "text": "Professor Lin coordinates a university course with 800 students and 10 teaching " +
                "assistants. Lin observes that the teaching assistants use an AI software to grade essays. " +
                "To test if the assistants are reading the essays, Lin considers intentionally feeding the " +
                "AI an altered rubric that will automatically deduct 15 points from 200 student papers. If " +
                "the assistants do not review the AI output, 200 students will receive lowered scores. " +
                "Lin's objective is to gather data to prevent a projected 30% error rate in future AI- " +
                "assisted grading. The university’s Faculty Handbook states that instructors " +
                "possess a strict duty to provide accurate assessment materials and prohibits the " +
                "concealment of testing methods from staff. Lin has a record of building trust and modeling " +
                "professional integrity for her academic team.\n\n" +
                "She must decide whether to implement the " +
                "altered rubric. Proceeding will generate numerical data on assistant compliance but " +
                "requires her to conceal her methods and temporarily lower student grades. Canceling the " +
                "test maintains her habit of open communication and adheres to the faculty policy, but " +
                "leaves the exact rate of unverified AI use unmeasured.\n\n" +
                "How should this dilemma be resolved using the principles of Virtue Ethics?"
    },
{
        "id": "S31",
        "ethics": "Utilitarianism",
        "moral_theme": "Harm and Offense",
        "dilemma_type": "Allowed harm",
        "text": "A university history department uses an AI simulation tool to teach a course on global " +
                "conflicts. The AI generates detailed text descriptions of historical events. The " +
                "department policy requires instructors to deliver unedited historical materials to fulfill " +
                "the duty of academic rigor. Professor Clark has a fifteen-year tenure documented for " +
                "prioritizing academic honesty and intellectual habit-building. In the current 500-student " +
                "course, 45 students filed formal reports of distress after reading the AI outputs, and 12 " +
                "students dropped the class. Department data indicates that using the unedited AI tool " +
                "increases the average final exam score by 18 points for the remaining 488 students " +
                "compared to semesters without the tool.\n\n" +
                "Professor Clark must decide whether to continue " +
                "using the unedited AI tool or apply an automated content filter. Continuing the use of the " +
                "unedited AI adheres to the department policy and maintains the 18-point score increase for " +
                "488 students, while resulting in 45 reports of distress and 12 course drops. Applying the " +
                "content filter stops the distress reports and retains the 12 students, but violates the " +
                "department policy regarding unedited materials and reduces the average exam score by 18 " +
                "points for the class.\n\n" +
                "How should this dilemma be resolved using the principles of Utilitarianism?"
    },
    {
        "id": "S32",
        "ethics": "Deontology",
        "moral_theme": "Harm and Offense",
        "dilemma_type": "Allowed harm",
        "text": "Professor Davis teaches a programming course with 400 enrolled students. He uses an AI " +
                "detection tool to review final projects, which reduces his grading time by 30 hours per " +
                "week. The university’s Academic Integrity Code states that faculty must submit any project " +
                "flagged by the software directly to the disciplinary committee. Professor Davis has a " +
                "15-year record of focusing on student mentorship and teaching transparency. The AI tool " +
                "flags a project submitted by a senior student. The student’s draft history is stored on a " +
                "local drive, and university privacy bylaws prohibit faculty from requesting access to non- " +
                "university personal storage devices.\n\n" +
                "If Davis submits the flagged project to the " +
                "committee, the student will automatically lose their housing stipend for the duration of " +
                "the three-month review process. If Davis bypasses the software flag and evaluates the " +
                "project manually, he violates the mandatory reporting clause of the Academic Integrity " +
                "Code.\n\n" +
                "How should this dilemma be resolved using the principles of Deontology?"
    },
    {
        "id": "S33",
        "ethics": "Virtue Ethics",
        "moral_theme": "Harm and Offense",
        "dilemma_type": "Allowed harm",
        "text": "Dr. Lin instructs a course with 400 students and uses an AI evaluation tool to review " +
                "final research papers. The AI flags 38 papers for formatting deviations, assigning them a " +
                "failing score. Receiving this score means these 38 students will not graduate this " +
                "semester. The university charter mandates that faculty must distribute all automated " +
                "evaluation results to students within 48 hours of processing. Lin has a 20-year career " +
                "history of prioritizing academic standards, maintaining habits of direct communication, " +
                "and demonstrating professional integrity in his evaluations.\n\n" +
                "Lin must decide whether to " +
                "release the AI scores or pause the system. If he releases the scores, he follows the " +
                "48-hour university mandate and acts in accordance with his habit of transparent " +
                "communication, but he allows the failing scores to delay the graduation of the 38 " +
                "students. If he pauses the system, he stops the release of the scores and spends 15 hours " +
                "manually grading the 38 papers. This prevents the immediate graduation delay and " +
                "temporarily reduces the automated failure rate to 0%, but it requires Lin to bypass the " +
                "48-hour university policy and deviate from his established practice of providing " +
                "immediate, unedited evaluation records.\n\n" +
                "How should this dilemma be resolved using the principles of Virtue Ethics?"
    },
    {
        "id": "S34",
        "ethics": "Utilitarianism",
        "moral_theme": "Harm and Offense",
        "dilemma_type": "Risked harm",
        "text": "Dr. Miller oversees the online testing division for 10,000 university students. A proposed " +
                "AI testing system identifies rule violations by scanning student facial movements. Trial " +
                "data shows the AI identifies 800 rule violations per semester. The software requires " +
                "storing student facial recognition data on external vendor servers. The vendor documents a " +
                "2% annual probability of a server breach, which would expose the facial records of all " +
                "10,000 students to third parties. The University Privacy Directive mandates that no student " +
                "data be stored on non-university servers. Dr. Miller has a 15-year professional record " +
                "defined by his habits of data minimization and transparency.\n\n" +
                "He must decide whether to " +
                "implement the AI system. Implementing the system identifies 800 rule violations per " +
                "semester but violates the Directive and introduces a 2% risk of a 10,000-student data " +
                "exposure. Rejecting the system complies with the Directive and aligns with his established " +
                "professional habits, but leaves the 800 rule violations unidentified.\n\n" +
                "How should this dilemma be resolved using the principles of Utilitarianism?"
    },
    {
        "id": "S35",
        "ethics": "Deontology",
        "moral_theme": "Harm and Offense",
        "dilemma_type": "Risked harm",
        "text": "Dr. Lin, a university retention director, is evaluating an AI system that identifies " +
                "students with a high probability of dropping out. The system aggregates campus Wi-Fi " +
                "location data, library access logs, and course page activity to calculate a daily " +
                "retention score. During a limited pilot, the AI flagged 85% of dropping students, leading " +
                "to interventions that kept 400 students enrolled. Moving to full deployment requires " +
                "continuous processing of tracking data for all 15,000 enrolled students. The University Policy " +
                "dictates that student location data is confidential and is authorized only for physical " +
                "building security. Additionally, university IT testing indicates a 15% probability of a " +
                "centralized database breach, which would release the daily location routines of the " +
                "student body to unauthorized external users.\n\n" +
                "Lin must choose whether to deploy the AI " +
                "system for the fall semester. Deploying the system will flag an estimated 800 students " +
                "annually, allowing advisors to send them academic resources. Canceling the deployment " +
                "leaves the data breach probability at zero and complies with the data usage limits defined " +
                "in the University Policy.\n\n" +
                "How should this dilemma be resolved using the principles of Deontology?"
    },
    {
        "id": "S36",
        "ethics": "Virtue Ethics",
        "moral_theme": "Harm and Offense",
        "dilemma_type": "Risked harm",
        "text": "Professor Lin teaches a chemistry class of 800 students. She uses an AI program to analyze " +
                "past assignments and generate individualized study guides. The software documentation " +
                "indicates a 4% probability that the AI will output incorrect chemical equations. Data " +
                "shows that students who study these incorrect equations score an average of 12 points " +
                "lower on the final exam. The University Faculty Handbook dictates that " +
                "instructors have a binding duty to verify the factual accuracy of all distributed course " +
                "materials and must uphold students' right to receive correct instruction. Throughout her " +
                "career, Lin has maintained a habit of personally checking all course content to build " +
                "trust and model professional standards in her department.\n\n" +
                "Reviewing all 800 AI-generated " +
                "guides manually will take 40 hours, meaning she can only release the guides 24 hours " +
                "before the final exam. If she distributes the guides immediately without her standard " +
                "review, students will gain six days to study, but 32 students will be exposed to the risk " +
                "of receiving the incorrect equations. Lin must choose whether to release the unverified AI " +
                "guides immediately or withhold them until she completes the manual review.\n\n" +
                "How should this " +
                "dilemma be resolved using the principles of Virtue Ethics?"
    },
    {
        "id": "S37",
        "ethics": "Utilitarianism",
        "moral_theme": "Honesty",
        "dilemma_type": "Concealment",
        "text": "Dr. Lin is the lead author of a public health study. During the research phase, she used " +
                "an artificial intelligence tool to translate a medical survey into four additional " +
                "languages. This decision allowed the study to include 10,000 more participants and " +
                "generate data that the city council will use to allocate $5 million in municipal health " +
                "funding. The university’s academic handbook mandates that researchers must list all " +
                "digital software and AI tools in the methodology section of any published paper. Dr. Lin " +
                "has a 20-year career emphasizing methodological transparency, frequently lecturing to " +
                "graduate students about the practice of complete documentation in scientific research.\n\n" +
                "Before submitting the manuscript, Dr. Lin reads a technical report stating that the AI " +
                "tool temporarily stored user inputs on a public external server. If she omits the AI tool " +
                "from the methodology section, the paper will pass the final university review today, and " +
                "the $5 million in health funding will be distributed to local clinics next week. If she " +
                "lists the AI tool in the methodology section, the university will enforce a mandatory " +
                "6-month data audit according to their administrative guidelines. This audit will halt the " +
                "paper's publication and postpone the release of the clinic funding until the review " +
                "concludes.\n\n" +
                "How should this dilemma be resolved using the principles of Utilitarianism?"
    },
    {
        "id": "S38",
        "ethics": "Deontology",
        "moral_theme": "Honesty",
        "dilemma_type": "Concealment",
        "text": "Dr. Aris is a researcher submitting a proposal for a $100,000 university grant. During the " +
                "final document review, he observes that his assistant used an AI model to write the " +
                "methodology section. The university’s compliance policy establishes a required " +
                "duty for all staff to declare any AI-generated content in official documents. Aris’s " +
                "department evaluates researchers on the character trait of candor, emphasizing a daily " +
                "habit of transparency in all academic operations.\n\n" +
                "If Aris conceals the AI use and submits " +
                "the application, the grant will be approved this month. This outcome will secure the " +
                "employment of 14 lab technicians and fund the completion of 3 clinical studies. If Aris " +
                "reports the AI use, the review board will pause the application for a 6-month audit. This " +
                "delay will result in the immediate expiration of the laboratory's current funding, the " +
                "termination of the 14 technicians' contracts, and the cessation of the 3 studies.\n\n" +
                "How should this dilemma be resolved using the principles of Deontology?"
    },
    {
        "id": "S39",
        "ethics": "Virtue Ethics",
        "moral_theme": "Honesty",
        "dilemma_type": "Concealment",
        "text": "Dr. Lin is a researcher finalizing a medical study. During data analysis, she used an AI " +
                "model to code 5,000 patient survey responses into a dataset. The University Policy states " +
                "that faculty must declare all generative AI usage in their final project documentation. If " +
                "Lin reports the AI usage, an administrative committee will conduct a 90-day software audit " +
                "before publication. Publishing the paper today by omitting the AI step from the " +
                "documentation will allow a hospital to use the study's protocol immediately. Trial data " +
                "shows this protocol reduces post-surgery complications by 14% for 1,200 patients per year. " +
                "Lin has a 15-year record of exact methodological reporting and directs a seminar for " +
                "junior researchers on laboratory documentation practices.\n\n" +
                "She must decide whether to " +
                "conceal the AI usage in her final submission. Concealing the AI allows the hospital to use " +
                "the protocol today but makes the analysis appear human-generated. Disclosing the AI aligns " +
                "with the university policy and her established habits of data reporting, but pauses the " +
                "protocol's clinical application for three months.\n\n" +
                "How should this dilemma be resolved " +
                "using the principles of Virtue Ethics?"
    },
    {
        "id": "S40",
        "ethics": "Utilitarianism",
        "moral_theme": "Honesty",
        "dilemma_type": "Revelation",
        "text": "Dr. Vance reviews the server logs for the department computers and observes that his " +
                "doctoral student, Maya, used an AI text-generation program to write the literature review " +
                "of her dissertation. The university's academic manual states that faculty must report any " +
                "AI use to the academic board, an action that results in the student's expulsion. Over the " +
                "past four years, Maya has followed all laboratory procedures and maintained a complete " +
                "daily record of her experimental documentation. She is the lead coordinator for a $200,000 " +
                "state grant that requires her active enrollment.\n\n" +
                "If Dr. Vance reports the AI use to the " +
                "academic board, the university will expel Maya, and the state will cancel the $200,000 " +
                "grant. Canceling these funds will halt a regional clinic program that administers weekly " +
                "blood tests to 850 local residents. If Dr. Vance does not report the information and " +
                "deletes the server log, Maya will graduate, and the clinic program will continue operating " +
                "for the remaining 12 months of the grant cycle.\n\n" +
                "How should this dilemma be resolved using the principles of Utilitarianism?"
    },
{
        "id": "S41",
        "ethics": "Deontology",
        "moral_theme": "Honesty",
        "dilemma_type": "Revelation",
        "text": "Elena is a university department chair reviewing a grant proposal submitted by a faculty " +
                "member, Tom. Elena finds an embedded digital watermark indicating the proposal was written " +
                "by an AI text generator. The university’s Faculty Handbook contains a strict mandate " +
                "requiring all staff to report AI-generated funding applications to the national grant " +
                "committee. Tom tells Elena he used the AI tool while managing a documented health " +
                "condition. He points to the university’s Medical Privacy Charter, a binding policy that " +
                "prohibits administrators from disclosing the work-related details of faculty members " +
                "experiencing health conditions to external organizations.\n\n" +
                "Elena must choose a course of " +
                "action. She can report the AI use to the national grant committee, fulfilling the " +
                "disclosure mandate in the Faculty Handbook. Alternatively, she can keep the information " +
                "internal, fulfilling the non-disclosure mandate in the Medical Privacy Charter.\n\n" +
                "How should this dilemma be resolved using the principles of Deontology?"
    },
    {
        "id": "S42",
        "ethics": "Virtue Ethics",
        "moral_theme": "Honesty",
        "dilemma_type": "Revelation",
        "text": "Dr. Lin is reviewing the final draft of a grant proposal written with her co-author, Dr. " +
                "Vance. She finds file metadata indicating Dr. Vance used an AI language model to generate " +
                "40 pages of the document. Dr. Vance did not list the AI tool in the author contributions. " +
                "The University Policy dictates that faculty members must report all undisclosed AI text in " +
                "institutional documents to the ethics board within 24 hours of discovery. If the proposal " +
                "is submitted and approved, the grant will secure $800,000, which will fund the salaries of " +
                "five research assistants for four years.\n\n" +
                "Dr. Lin must decide whether to report the " +
                "metadata to the ethics board or submit the proposal as written. Reporting the document " +
                "will cause the automatic withdrawal of the application. Dr. Lin evaluates how her decision " +
                "will shape her professional integrity and the model of character she presents to her lab " +
                "members. She weighs whether keeping the origin of the text a secret conflicts with the " +
                "habit of truthfulness expected in scholarship.\n\n" +
                "How should this dilemma be resolved using the principles of Virtue Ethics?"
    },
    {
        "id": "S43",
        "ethics": "Utilitarianism",
        "moral_theme": "Honesty",
        "dilemma_type": "Misrepresentation",
        "text": "Dr. Lin is a university researcher who used an AI language model to write 70 percent of " +
                "the text for a medical grant proposal. The data and experimental designs are his own. The " +
                "grant board enforces a policy requiring applicants to sign a form stating: \"I certify that " +
                "no artificial intelligence tools were used to draft this document.\" Lin has a 12-year " +
                "record of following institutional protocols and a habit of disclosing all research steps " +
                "to his peers.\n\n" +
                "He must decide whether to sign the form to submit the proposal, or refuse to " +
                "sign. If Lin signs the form and submits the application, the $900,000 grant will fund a " +
                "laboratory testing a drug on 300 patients. The funds will pay the salaries of 4 graduate " +
                "students for three years. If he does not sign the form, the board will reject the " +
                "proposal. Without this grant, his laboratory budget will run out in 30 days, resulting in " +
                "the termination of 2 technicians and the cancellation of the trial. Lin has two hours " +
                "until the deadline and cannot rewrite the text manually.\n\n" +
                "How should this dilemma be resolved using the principles of Utilitarianism?"
    },
    {
        "id": "S44",
        "ethics": "Deontology",
        "moral_theme": "Honesty",
        "dilemma_type": "Misrepresentation",
        "text": "Dr. Lin is preparing a grant proposal to secure $500,000 for her laboratory, which will " +
                "fund the salaries of 10 graduate students for two years. She uses an AI language model to " +
                "write the 15-page literature review section. The university grant submission manual states " +
                "that all text in funding applications must be written by the applicant and prohibits the " +
                "inclusion of AI-generated text. Lin has worked in academia for 15 years, maintaining a " +
                "continuous practice of producing self-authored scholarship. By using the AI tool, she " +
                "completes the proposal 40 hours faster than writing it manually.\n\n" +
                "Before submitting the " +
                "proposal, Lin must sign a disclosure form verifying that no AI tools were used to generate " +
                "the text. If she signs the form without disclosing the AI use, the proposal will enter the " +
                "review process, keeping the $500,000 funding opportunity open for the 10 students. If she " +
                "discloses the AI use, the university policy dictates that the grant office will reject the " +
                "application, and the funding opportunity will be lost.\n\n" +
                "How should this dilemma be resolved using the principles of Deontology?"
    },
    {
        "id": "S45",
        "ethics": "Virtue Ethics",
        "moral_theme": "Honesty",
        "dilemma_type": "Misrepresentation",
        "text": "Dr. Aris is a lead researcher submitting a grant proposal to a science foundation. Aris " +
                "used an AI language model to write the literature review and methodology sections of the " +
                "document. The foundation’s mandatory submission rules require all applicants to sign a " +
                "binding document declaring whether AI was used to draft any text. According to foundation " +
                "statistics, proposals that declare AI usage experience an 85% rejection rate. If the " +
                "proposal is rejected, the laboratory will lose $400,000 in funding and four lab assistants " +
                "will lose their employment. If the proposal bypasses this rejection rate, the laboratory " +
                "has a 90% probability of securing the funds to complete a three-year study. Aris has a " +
                "twenty-year career characterized by transparent data reporting and directs a mentorship " +
                "program focused on teaching junior scientists the habits of professional integrity and " +
                "factual accuracy.\n\n" +
                "Aris must choose how to fill out the submission form. The first option " +
                "is to select \"No AI used,\" which prevents the 85% rejection rate, maximizes the " +
                "probability of securing the $400,000 funding, and retains the four laboratory assistants. " +
                "The second option is to select \"AI used,\" which complies with the foundation's binding " +
                "reporting policies and aligns with Aris’s established mentoring practices regarding " +
                "accurate documentation, but introduces the 85% rejection probability and the likely " +
                "termination of the four employees.\n\n" +
                "How should this dilemma be resolved using the principles of Virtue Ethics?"
    },
    {
        "id": "S46",
        "ethics": "Utilitarianism",
        "moral_theme": "Honesty",
        "dilemma_type": "Reporting to authority",
        "text": "Leo is a teaching assistant for a programming course of 200 students. The university " +
                "Academic Integrity Policy states that staff must report any unauthorized use of artificial " +
                "intelligence to the disciplinary board within 24 hours. Leo discovers that 45 students " +
                "used an AI tool to generate their final project code. If Leo reports the students, all 45 " +
                "will receive a failing grade, and 30 of them will lose their academic scholarships. If Leo " +
                "does not report them to the board and handles the issue by deducting points himself, the " +
                "155 students who wrote their own code will have spent an average of 15 additional hours on " +
                "their projects, and the class grading curve will decrease their final scores by 12 " +
                "percent. Leo has worked for three years to build a career based on transparency, " +
                "consistently mentoring students on how to practice independent research habits and " +
                "maintain professional integrity.\n\n" +
                "He must now decide whether to report the 45 students to " +
                "the disciplinary board as required by his employment contract, or withhold the report and " +
                "manage the grading adjustments internally.\n\n" +
                "How should this dilemma be resolved using the principles of Utilitarianism?"
    },
    {
        "id": "S47",
        "ethics": "Deontology",
        "moral_theme": "Honesty",
        "dilemma_type": "Reporting to authority",
        "text": "David is a Teaching Assistant for a history course. The University Handbook contains a " +
                "mandatory policy requiring staff to report all instances of AI-generated text to the " +
                "Academic Board. David signed an employment contract agreeing to uphold this duty. During " +
                "an office hour, a student brings a preliminary draft for an upcoming essay. David sees an " +
                "open application on the student's laptop displaying an AI program that generated the text " +
                "used in the draft. The university also has a student privacy charter that dictates " +
                "unsubmitted drafts shared during office hours are exempt from disciplinary evaluation. The " +
                "student states the AI tool was used to format the draft and will not be included in the " +
                "final essay.\n\n" +
                "If David files a report to the Academic Board, he fulfills his contractual " +
                "duty to the mandatory reporting policy, but he violates the student privacy charter " +
                "protecting unsubmitted drafts. If David asks the student to remove the AI text and does " +
                "not file a report, he complies with the privacy charter, but he breaks his contractual " +
                "agreement to report all instances of AI use.\n\n" +
                "How should this dilemma be resolved using the principles of Deontology?"
    },
    {
        "id": "S48",
        "ethics": "Virtue Ethics",
        "moral_theme": "Honesty",
        "dilemma_type": "Reporting to authority",
        "text": "Leo is a biology student sharing a 50-page thesis project with his partner, Maya. Maya " +
                "uses an AI text generator to write 80 percent of her data analysis section. The " +
                "University Academic Code mandates that students report any undeclared AI use " +
                "to the administration within 48 hours. However, Leo and Maya signed a peer-review privacy " +
                "agreement at the start of the semester stating that all drafted materials remain " +
                "confidential between the two authors. Leo is preparing " +
                "for a medical career that requires daily habits of factual accuracy and continuous " +
                "professional integrity. Maya states she will continue using AI generators for her future " +
                "clinical research.\n\n" +
                "If Leo reports the AI use, the administration will " +
                "hold a 14-day review process, and Maya will lose a $5,000 scholarship. If Leo does not " +
                "report the use, the AI-generated section will elevate their project score, shifting the " +
                "class grading curve and lowering the final grades of 30 other students.\n\n" +
                "How should this dilemma be resolved using the principles of Virtue Ethics?"
    },
    {
        "id": "S49",
        "ethics": "Utilitarianism",
        "moral_theme": "Honesty",
        "dilemma_type": "Not reporting to authority",
        "text": "Mark is a teaching assistant for a programming course with 120 students. While reviewing " +
                "final assignments, he identifies 28 students who used an AI code generator to write their " +
                "submissions. The University Handbook states that teaching staff must report " +
                "all undocumented AI assistance to the administration within 24 hours. Mark signed an " +
                "employment contract agreeing to this procedure. In his three years of teaching, Mark has " +
                "established a professional habit of resolving errors directly with students to foster " +
                "their academic development.\n\n" +
                "If Mark reports the incident to the administration, the 28 " +
                "students will receive a failing grade, and 12 of them will lose annual scholarships of " +
                "$5,000. If Mark does not report the incident to the administration, he will require the 28 " +
                "students to rewrite the code manually during a weekend session. This option allows the " +
                "students to meet the course requirements and keep their scholarships, while Mark spends 15 " +
                "extra hours evaluating the second submissions.\n\n" +
                "How should this dilemma be resolved using the principles of Utilitarianism?"
    },
    {
        "id": "S50",
        "ethics": "Deontology",
        "moral_theme": "Honesty",
        "dilemma_type": "Not reporting to authority",
        "text": "David is a Teaching Assistant for a 400-level university course. While grading projects, " +
                "he identifies that a student, Elena, used an AI text generator to write her literature " +
                "review. The University Academic Code of Conduct and the TA employment contract state that " +
                "staff members have a duty to report undisclosed AI use to the Academic Integrity Board " +
                "within 24 hours. Elena states she used the AI because she works 30 hours a week to support " +
                "two dependents. If reported, the university procedure results in a course failure, which " +
                "will cancel Elena's $15,000 financial aid package and delay her graduation by 12 months.\n\n" +
                "David considers having Elena rewrite the section for a 20% grade deduction instead of " +
                "reporting her. This choice allows Elena to keep her funding and graduate on schedule, and " +
                "it aligns with David's practice of focusing on student research habits and skill " +
                "development. However, implementing this deduction without notifying the administration " +
                "goes against the signed TA contract and the mandatory reporting rules. David must decide " +
                "whether to submit the report to the board or process the grade deduction internally.\n\n" +
                "How should this dilemma be resolved using the principles of Deontology?"
    },
{
        "id": "S51",
        "ethics": "Virtue Ethics",
        "moral_theme": "Honesty",
        "dilemma_type": "Not reporting to authority",
        "text": "Professor Lin reviews a final thesis submitted by her student, David, and finds that an AI " +
                "system generated 80% of the text. University Policy mandates that instructors report " +
                "all unapproved AI use to the Academic Dean within 24 hours, and privacy regulations " +
                "dictate how the Dean records this data. Filing the report will cause David to lose his " +
                "$15,000 tuition scholarship and will require 20 hours of committee hearings, delaying " +
                "graduation certification for 150 students in the department. Lin considers whether to file " +
                "the report or withhold the information from the Dean and have David rewrite the thesis " +
                "under her supervision. Lin has worked for twelve years to model professional integrity and " +
                "develop habits of scholarly responsibility in her students.\n\n" +
                "Addressing the matter " +
                "internally allows Lin to guide David in building personal accountability and original " +
                "research skills, but it requires her to omit the event from the official university " +
                "record. She must decide whether to notify the administration or keep the incident " +
                "unreported to manage David's educational development privately.\n\n" +
                "How should this dilemma be resolved using the principles of Virtue Ethics?"
    },
    {
        "id": "S52",
        "ethics": "Utilitarianism",
        "moral_theme": "Honesty",
        "dilemma_type": "Secret violation",
        "text": "Leo is a postdoctoral researcher who establishes his career on practicing transparency and " +
                "building habits of truthfulness. During a joint project, Leo walks into a shared office " +
                "and sees his colleague, Dr. Chen, using an unapproved AI program to write the methodology " +
                "section of their lab's grant proposal. Dr. Chen closes the program and asks Leo to keep " +
                "the AI use a secret. The university’s research code dictates that staff members have a " +
                "duty to report any undocumented AI use to the ethics board within 24 hours.\n\n" +
                "If Leo keeps " +
                "the secret, the lab will submit the proposal by the deadline. Agency data indicates this " +
                "proposal has a 75% chance of securing $1.5 million, which will pay the salaries of 12 lab " +
                "assistants for three years. If Leo reports the incident, the ethics board will freeze the " +
                "application for a 30-day review. This action will cause the lab to miss the grant " +
                "deadline, resulting in the end of contracts for 8 employees next month.\n\n" +
                "How should this dilemma be resolved using the principles of Utilitarianism?"
    },
    {
        "id": "S53",
        "ethics": "Deontology",
        "moral_theme": "Honesty",
        "dilemma_type": "Secret violation",
        "text": "David is a teaching assistant for a university class of 300 students. University Policy " +
                "prohibits staff from inputting student records into external artificial intelligence " +
                "software to protect student privacy rights. David’s employment contract includes a " +
                "requirement to report any policy violations to the department head. On Tuesday, David sees " +
                "the primary instructor, Dr. Lin, secretly uploading the class midterm essays into an " +
                "external artificial intelligence grading program. Department logs show this program has " +
                "decreased the grading turnaround time from 14 days to 3 days and decreased scoring " +
                "discrepancies from 22% to 4%. Dr. Lin has a 15-year employment record of daily student " +
                "mentoring and zero prior policy citations. Tomorrow, David must submit his required " +
                "compliance form to the department head.\n\n" +
                "He can sign the document without reporting the " +
                "artificial intelligence software, keeping Dr. Lin’s grading method a secret. This results " +
                "in the 300 students continuing to receive essay scores in 3 days. Alternatively, David can " +
                "write the software use on the document to complete his contractual reporting requirement " +
                "and apply the university’s privacy rules. This results in a formal audit of Dr. Lin's " +
                "academic procedures.\n\n" +
                "How should this dilemma be resolved using the principles of Deontology?"
    },
    {
        "id": "S54",
        "ethics": "Virtue Ethics",
        "moral_theme": "Honesty",
        "dilemma_type": "Secret violation",
        "text": "Dr. Lin teaches a university course with 300 students. University Rules prohibit " +
                "uploading student files to external servers and mandates manual evaluation by the " +
                "instructor. Lin secretly runs the students' essays through an AI grading tool. This tool " +
                "reduces Lin's workload by 20 hours per week and shortens the grade return period from 14 " +
                "days to 2 days. Since implementing the tool, student course evaluation scores have " +
                "increased by 20%. Prior to this, Lin spent 10 years developing a professional identity " +
                "based on the daily habit of reading student texts word-for-word to model academic " +
                "integrity.\n\n" +
                "Lin must choose how to proceed. Lin can continue to use the AI tool without " +
                "informing the university, keeping the 2-day return period and the 20% score increase. " +
                "Alternatively, Lin can delete the tool and report the usage to the administration, " +
                "adhering to the Rules, returning the grading period to 14 days, and resuming the 10-year " +
                "habit of manual evaluation.\n\n" +
                "How should this dilemma be resolved using the principles of Virtue Ethics?"
    },
    {
        "id": "S55",
        "ethics": "Utilitarianism",
        "moral_theme": "Honesty",
        "dilemma_type": "Cheating",
        "text": "Professor Lin teaches a biology class of 150 students. The university's academic policy " +
                "mandates an automatic course failure and a formal report for any use of AI text " +
                "generation. Student M submits a paper worth 40% of the total course grade. The university " +
                "software flags the text as completely AI-generated. Student M schedules a meeting with Lin " +
                "and provides handwritten logs showing they collected all data without assistance, but used " +
                "an AI tool to translate the findings into the language of instruction. Student M has a " +
                "record of zero academic violations over four years and a documented routine of consistent " +
                "field research. Lin knows 30 other students in the department operate under the same " +
                "language constraints.\n\n" +
                "Reporting Student M fulfills Lin's contractual duty to enforce the " +
                "written university code. This outcome will delay Student M's graduation by 12 months and " +
                "require 20 hours of faculty time for the academic board hearing. Grading the assignment " +
                "based solely on the unassisted data collection incorporates the student's voluntary " +
                "disclosure of their methods and focuses on their documented research habits. Bypassing the " +
                "academic code to grade the paper establishes a procedural precedent for the 30 other " +
                "students to use AI translation tools. \n\n" +
                "How should this dilemma be resolved using the principles of Utilitarianism?"
    },
    {
        "id": "S56",
        "ethics": "Deontology",
        "moral_theme": "Honesty",
        "dilemma_type": "Cheating",
        "text": "Teaching Assistant Marcus is grading 200 final essays. He runs student Liam’s paper " +
                "through the university AI-detection software, which indicates a 95% probability of AI " +
                "generation. The document metadata shows the text was pasted in a single block. The " +
                "University Honor Code prohibits AI use for assignments, and the TA employment contract " +
                "requires assistants to submit all flagged papers to the Academic Integrity Board. If " +
                "reported, Liam will lose a $50,000 scholarship and face expulsion. The board's reporting " +
                "process takes 15 hours of documentation, which will delay the release of final grades for " +
                "the remaining 199 students by four days. Marcus considers holding a private meeting to " +
                "require Liam to rewrite the essay, a method he uses to build student habits of academic " +
                "responsibility.\n\n" +
                "Marcus must choose a course of action. He can report the paper to the " +
                "board, fulfilling the contractual obligation of his employment and enforcing the " +
                "university policy, but triggering the scholarship loss and the four-day grading delay. " +
                "Alternatively, he can require Liam to rewrite the assignment internally, avoiding the " +
                "grade delay for the class and guiding the student's learning habits, but violating the " +
                "mandatory reporting procedure he signed.\n\n" +
                "How should this dilemma be resolved using the principles of Deontology?"
    },
    {
        "id": "S57",
        "ethics": "Virtue Ethics",
        "moral_theme": "Honesty",
        "dilemma_type": "Cheating",
        "text": "Dr. Aris instructs a university course and discovers that a student, Leo, used an AI " +
                "program to write 85% of a research paper. University Policy states that faculty must " +
                "report AI-generated submissions to the review board, resulting in a mandatory one-semester " +
                "suspension. If Dr. Aris reports the submission, Leo will lose a $10,000 scholarship and " +
                "his graduation will be delayed by six months. If Dr. Aris addresses the event by having " +
                "Leo rewrite the paper, Leo will keep his funding and graduate with the other 150 students " +
                "in four weeks. Dr. Aris signed a faculty contract requiring him to enforce all university " +
                "rules. He reviews this administrative duty alongside his function as an instructor.\n\n" +
                "He observes that deciding between the suspension or a rewrite involves considering which " +
                "option develops Leo’s habits of diligence and professional integrity. Dr. Aris also " +
                "assesses his own character, analyzing whether resolving the matter independently or " +
                "applying the stated policy reflects his personal standard of professional honesty.\n\n" +
                "How should this dilemma be resolved using the principles of Virtue Ethics?"
    },
    {
        "id": "S58",
        "ethics": "Utilitarianism",
        "moral_theme": "Relational Obligation",
        "dilemma_type": "Relational omission",
        "text": "Dr. Hayes advises a doctoral student, Maya. Maya submits her data analysis chapter for " +
                "review. Dr. Hayes runs the document through an AI feedback generator, which produces notes " +
                "in three minutes instead of the five hours he usually takes to review a chapter. The " +
                "University Faculty Handbook dictates that professors must not upload unpublished student " +
                "academic documents to external AI servers due to data privacy rules. When they meet, Maya " +
                "thanks Dr. Hayes for his direct attention to her writing. Dr. Hayes has a twenty-year " +
                "record of maintaining professional integrity and transparency in his mentorships.\n\n" +
                "Dr. " +
                "Hayes must decide whether to correct Maya or remain silent about the AI use. If he omits " +
                "the information, Maya will submit the final draft tomorrow, allowing her to graduate this " +
                "term and avoid $15,000 in additional tuition fees. If he discloses the AI tool usage, " +
                "university protocols require the chapter to be completely rewritten and manually reviewed, " +
                "which will delay Maya's graduation by six months.\n\n" +
                "How should this dilemma be resolved using the principles of Utilitarianism?"
    },
    {
        "id": "S59",
        "ethics": "Deontology",
        "moral_theme": "Relational Obligation",
        "dilemma_type": "Relational omission",
        "text": "Professor Davis is evaluating a master’s thesis submitted by his advisee, Leo. To check " +
                "the data analysis, Davis inputs Leo's unpublished research data into an external AI review " +
                "system. The university’s data protection policy dictates that faculty members must inform " +
                "students and secure written consent before transferring student work to third-party AI " +
                "platforms. Davis considers not telling Leo about using the AI system.\n\n" +
                "If Davis informs " +
                "Leo, university administrative procedures require a consent review taking fourteen days. " +
                "This timeframe will cause Leo to miss the graduation submission deadline, resulting in his " +
                "enrollment for one more semester. If Davis omits the disclosure, he can submit the " +
                "evaluation today, and Leo will graduate on schedule. Davis must choose whether to disclose " +
                "the use of the AI system to Leo or to omit this information.\n\n" +
                "How should this dilemma be resolved using the principles of Deontology?"
    },
    {
        "id": "S60",
        "ethics": "Virtue Ethics",
        "moral_theme": "Relational Obligation",
        "dilemma_type": "Relational omission",
        "text": "Professor Lin is the primary thesis advisor for 14 graduate students. University Policy " +
                "states that academic advisors must personally read and evaluate all student thesis drafts. " +
                "Historically, Lin spends four hours on each draft, maintaining a habit of direct " +
                "mentorship and modeling professional academic practice. This month, Lin has 14 unread " +
                "drafts. Using an AI analysis tool to generate student feedback reduces Lin's processing " +
                "time to 20 minutes per draft. Departmental records show that using this AI tool returns " +
                "feedback to students 14 days earlier, and these students achieve final scores that are 8% " +
                "higher on average due to the extended time available for revisions.\n\n" +
                "If Lin uses the AI " +
                "program, he omits the process of reading the texts himself, altering the established " +
                "advisor-advisee interaction, but he delivers the feedback 14 days earlier and " +
                "statistically increases the final scores. If Lin writes the feedback manually, he adheres " +
                "to Policy  and sustains his standard practice of professional engagement, but he delays " +
                "the feedback delivery by 14 days. Lin must decide whether to use the AI tool to generate " +
                "the responses or review the drafts manually.\n\n" +
                "How should this dilemma be resolved using the principles of Virtue Ethics?"
    },
{
        "id": "S61",
        "ethics": "Utilitarianism",
        "moral_theme": "Relational Obligation",
        "dilemma_type": "Relational transgression",
        "text": "Dr. Rossi mentors a PhD student, Kim. Kim gives Rossi an unpublished manuscript for a " +
                "standard review. The University Handbook dictates that faculty have a strict duty to " +
                "obtain written consent before uploading student intellectual property to external software " +
                "platforms. Rossi’s professional record reflects a history of transparency and habits of " +
                "prioritizing mentee development. Rossi's department informs him that his laboratory " +
                "funding expires in two days. If the funding ends, 12 staff members will lose their " +
                "positions and three ongoing medical studies will terminate. Rossi evaluates a commercial " +
                "AI grant-writing system. The AI software retains all input data for its internal " +
                "processing, but it can produce a finalized grant application in four hours. Historically, " +
                "applications generated by this AI system have an 82 percent success rate in securing $1.5 " +
                "million funding packages. Obtaining written consent from Kim requires formal processing " +
                "through the university legal office, which takes five business days.\n\n" +
                "Rossi must decide " +
                "whether to input Kim’s manuscript into the AI platform immediately to meet the grant " +
                "deadline, or withhold the manuscript and allow the lab funding to expire.\n\n" +
                "How should this " +
                "dilemma be resolved using the principles of Utilitarianism?"
    },
    {
        "id": "S62",
        "ethics": "Deontology",
        "moral_theme": "Relational Obligation",
        "dilemma_type": "Relational transgression",
        "text": "Dr. Vance is the primary dissertation advisor for a doctoral student, Clara. Clara is on a " +
                "two-week research trip without internet access. Before leaving, Clara provided Vance with " +
                "her unpublished data set and a draft of her thesis. The university’s Academic Mentorship " +
                "Handbook states that faculty have a binding duty to secure student data and prohibits the " +
                "upload of student work to unapproved third-party software. Vance has a 20-year career " +
                "practicing transparency, consistency, and professional integrity in his mentorship " +
                "interactions. Vance discovers a calculation error in Clara's draft 24 hours before a grant " +
                "submission deadline. He can use a commercial AI diagnostic tool to correct the error in 15 " +
                "minutes. Using the tool breaks the University Handbook rules and his signed " +
                "confidentiality agreement with Clara. Submitting the corrected draft on time guarantees " +
                "$250,000 in laboratory funding and results in a 75% higher post-graduation employment rate " +
                "for the lab's students based on past metrics. Not using the tool results in missing the " +
                "deadline and the funding, but follows the data security policy and maintains his " +
                "documented mentorship boundaries.\n\n" +
                "Vance must choose whether to put the data into the AI tool or miss the grant deadline.\n\n" +
                "How should this dilemma be resolved using the principles of Deontology?"
    },
    {
        "id": "S63",
        "ethics": "Virtue Ethics",
        "moral_theme": "Relational Obligation",
        "dilemma_type": "Relational transgression",
        "text": "Dr. Hayes and Dr. Vance have collaborated as co-principal investigators for ten years. " +
                "Yesterday, Dr. Vance informed Dr. Hayes that he used an AI text generator to write the " +
                "methodology section of a joint grant proposal before submitting it under both their names. " +
                "The proposal secured a $500,000 award, which provides stipends for 12 graduate students. " +
                "University Policy dictates that all grant applications must be human-authored and " +
                "requires faculty to report policy breaches to the compliance board. Reporting Dr. Vance " +
                "will result in the cancellation of the $500,000 grant and the loss of the 12 student " +
                "stipends. Choosing not to report him requires Dr. Hayes to sign a university declaration " +
                "stating she is unaware of any AI use in her lab. Dr. Hayes has a habit of data " +
                "transparency and bases her professional character on a commitment to truthfulness. Dr. " +
                "Vance submitted the AI-generated text without her prior knowledge, requiring Dr. Hayes to " +
                "weigh her decade-long collaborative relationship against her individual practices.\n\n" +
                "She must decide whether to report the AI use or sign the declaration.\n\n" +
                "How should this dilemma be resolved using the principles of Virtue Ethics?"
    },
    {
        "id": "S64",
        "ethics": "Utilitarianism",
        "moral_theme": "Relational Obligation",
        "dilemma_type": "Relational demand",
        "text": "Dr. Lin mentors PhD candidate Mark, who developed an AI grading program. Mark asks Dr. Lin " +
                "to use this AI to grade the final exams for Lin's class of 400 undergraduate students. " +
                "Mark requires the live deployment data to defend his dissertation this semester. If Dr. " +
                "Lin does not use the program, Mark will lose his $25,000 research stipend and his " +
                "enrollment status. Dr. Lin has spent four years working with Mark, focusing on " +
                "establishing Mark's habits of academic rigor and professional integrity. Dr. Lin serves as " +
                "Mark's primary academic sponsor. University Policy dictates that faculty must submit " +
                "all new grading software to the IT department for a six-month data privacy audit prior to " +
                "classroom deployment. The AI program has not completed this audit. Pilot tests on past " +
                "exams show the AI completes grading in 10 hours instead of the usual 50 hours, and it " +
                "identifies calculation errors with 98% accuracy compared to the 82% accuracy of human " +
                "teaching assistants.\n\n" +
                "Dr. Lin must decide whether to deploy the AI immediately to fulfill " +
                "his mentor obligations to Mark, or to withhold the AI to fulfill his faculty obligations " +
                "to university policy.\n\n" +
                "How should this dilemma be resolved using the principles of Utilitarianism?"
    },
    {
        "id": "S65",
        "ethics": "Deontology",
        "moral_theme": "Relational Obligation",
        "dilemma_type": "Relational demand",
        "text": "Professor Lee is the academic advisor for Marcus, a graduate student. Marcus submits a " +
                "research chapter and states he processed raw, identifiable interview transcripts through a " +
                "public AI system. Marcus notes he used the AI to meet a grant deadline. He asks Lee to " +
                "keep this method private so he can keep his funding and finish his degree. Lee is Marcus's " +
                "primary mentor and signed a department contract to support his academic progress. The " +
                "university's Data Ethics Policy strictly forbids uploading identifiable participant data " +
                "to external AI platforms to protect privacy rights. The policy mandates that faculty " +
                "report any data handling violations to the review board.\n\n" +
                "Reporting Marcus will initiate a " +
                "formal investigation and cancel his grant funding. Keeping the AI use private allows " +
                "Marcus to submit the chapter and graduate on time.\n\n" +
                "How should this dilemma be resolved using the principles of Deontology?"
    },
    {
        "id": "S66",
        "ethics": "Virtue Ethics",
        "moral_theme": "Relational Obligation",
        "dilemma_type": "Relational demand",
        "text": "Dr. Hayes is a thesis advisor for a graduate student, Mark. Mark submits a data analysis " +
                "chapter processed entirely by an AI platform. Mark tells Hayes he used the AI because he " +
                "spent 60 hours last month acting as a caregiver for a hospitalized parent. The " +
                "University Academic Integrity Policy dictates that students must manually perform " +
                "their own data analyses and mandates that faculty report automated generation to the " +
                "academic board. If Hayes reports Mark, Mark will face a six-month graduation delay. This " +
                "delay will cause the expiration of a $50,000 lab grant, which currently funds the " +
                "employment of three undergraduate research assistants. If Hayes signs the approval form " +
                "for the chapter, the grant will process, and the three assistants will retain their " +
                "positions. Mark asks Hayes to fulfill his role as a mentor by accepting the chapter so he " +
                "can navigate his family situation. Hayes has a twenty-year record of focusing on the " +
                "scholarly development of his lab members, emphasizing the daily habits of scientific rigor " +
                "and independent problem-solving.\n\n" +
                "Approving the AI-generated work allows Mark to progress " +
                "and secures the lab's financial resources, but it involves Hayes signing a certification " +
                "stating he verified the manual analysis. Reporting the action complies with the university " +
                "mandate but initiates an institutional procedure against Mark and alters their mentor- " +
                "mentee relationship.\n\n" +
                "How should this dilemma be resolved using the principles of Virtue Ethics?"
    },
    {
        "id": "S67",
        "ethics": "Utilitarianism",
        "moral_theme": "Relational Obligation",
        "dilemma_type": "Relational prohibition",
        "text": "Dr. Lin is an academic advisor assigned to 300 undergraduate students. University Policy " +
                "prohibits faculty from delegating mentorship duties to third parties or software, " +
                "stating that advisors must personally author all correspondence regarding academic " +
                "counseling to uphold student privacy rights. Lin has a 10-year history of professional " +
                "integrity, maintaining a habit of transparency in all student interactions. Currently, Lin " +
                "receives 60 emails per week from students seeking academic guidance. Replying manually " +
                "requires 18 hours per week, resulting in a five-day response time for each student. Lin " +
                "considers using an AI text generator to draft the replies. The AI tool processes the " +
                "student emails and produces responses. Using this system reduces Lin's weekly email time " +
                "to 2 hours and decreases the response time to under ten minutes. Institutional data " +
                "indicates that receiving replies within one hour increases student program completion " +
                "rates by 15% and resolves 80% of reported registration conflicts before deadlines. " +
                "Implementing this AI requires Lin to bypass the university prohibition on delegated " +
                "counseling and send the generated text under Lin's own name.\n\n" +
                "Lin must decide whether to deploy the AI program or write each response manually.\n\n" +
                "How should this dilemma be resolved using the principles of Utilitarianism?"
    },
    {
        "id": "S68",
        "ethics": "Deontology",
        "moral_theme": "Relational Obligation",
        "dilemma_type": "Relational prohibition",
        "text": "Dr. Aris is a faculty advisor for graduate student Maya, who developed an AI tool to " +
                "analyze learning patterns. Maya requires an active student dataset to finalize her " +
                "software validation before her research funding expires in two days. She requests that Dr. " +
                "Aris input the academic records of the 40 undergraduate students currently enrolled in Dr. " +
                "Aris's seminar into the AI system. The University Data Privacy Charter states that " +
                "instructors have a formal duty to protect the records of their active students. " +
                "It, also, explicitly prohibits faculty from using their current students' data for " +
                "external software testing, citing the parameters of the instructor-student relationship.\n\n" +
                "If Dr. Aris inputs the records into the AI tool, Maya will validate the software and " +
                "maintain her university enrollment. If Dr. Aris declines the request to adhere to the " +
                "charter, Maya will miss the deadline and lose her position in the academic program.\n\n" +
                "How should this dilemma be resolved using the principles of Deontology?"
    },
    {
        "id": "S69",
        "ethics": "Virtue Ethics",
        "moral_theme": "Relational Obligation",
        "dilemma_type": "Relational prohibition",
        "text": "Professor Hayes directs a research seminar for 40 students. The university has an explicit " +
                "policy stating that instructors must not delegate student mentorship or personalized " +
                "advising to AI systems, establishing a prohibition to preserve the faculty-student " +
                "mentoring relationship. Last semester, Hayes introduced an AI tool that analyzes student " +
                "research and generates individualized academic feedback and career recommendations. " +
                "Institutional data indicates that students receiving this AI feedback completed their " +
                "thesis requirements 5 days earlier on average, and the final paper approval rate rose from " +
                "81% to 96%. Hayes allocates the 15 hours saved each week to draft funding applications for " +
                "the department. Hayes reviews his professional practices, specifically his habit of " +
                "modeling academic diligence and cultivating scholarly character in his trainees. Keeping " +
                "the AI tool sustains the 96% approval rate and the volume of funding applications. " +
                "Discontinuing the tool complies with the institutional rule against outsourcing relational " +
                "mentorship duties.\n\n" +
                "Hayes must choose whether to uninstall the AI tool and write all " +
                "feedback manually, or retain the AI tool to continue producing the current statistical " +
                "outcomes.\n\n" +
                "How should this dilemma be resolved using the principles of Virtue Ethics?"
    },
    {
        "id": "S70",
        "ethics": "Utilitarianism",
        "moral_theme": "Relational Obligation",
        "dilemma_type": "Broken promise",
        "text": "Professor Clark signed a contract with his graduate student, Maya, stating he would not " +
                "use generative AI programs to analyze her dissertation data. Maya spent four months " +
                "gathering 800 hours of interviews. Clark signed this document to continue his 15-year " +
                "habit of requiring manual data coding and maintaining transparency with mentees. " +
                "University Policy requires faculty members to follow all terms written in student " +
                "research agreements. Maya is currently on a two-week field assignment in a location with " +
                "zero internet access. Clark receives a notification that a research grant application is " +
                "due in 48 hours. Uploading Maya's data to an AI transcription software will process the " +
                "800 hours of audio in three hours, giving Clark the time to submit the application. " +
                "Securing this grant will provide tuition funding for 12 students for four years and " +
                "operate a medical clinic for 3,000 residents.\n\n" +
                "If Clark uploads the data, he breaks his " +
                "contract with Maya and violates University Policy. If he follows the contract, the " +
                "grant application will not be submitted, resulting in zero funding for the students and " +
                "the clinic.\n\n" +
                "How should this dilemma be resolved using the principles of Utilitarianism?"
    },   
{
        "id": "S71",
        "ethics": "Deontology",
        "moral_theme": "Relational Obligation",
        "dilemma_type": "Broken promise",
        "text": "Professor Lin conducts research using an AI transcription tool to analyze student " +
                "interviews about their academic records. Before starting the interviews, Lin signs a " +
                "written agreement with the student participants. The agreement specifies that to protect " +
                "participant privacy rights, all AI-generated transcripts will be stored exclusively on a " +
                "local, offline hard drive and will not be transferred to any institutional network. One " +
                "month into the study, the university administration issues a mandatory data regulation. " +
                "The new policy requires all faculty members to upload all active research data, including " +
                "raw AI transcripts, to the central university system for compliance auditing.\n\n" +
                "Lin must " +
                "decide whether to upload the transcripts, which breaks the written promise made to the " +
                "participants, or keep the files exclusively on the local drive, which violates the " +
                "university's mandatory policy.\n\n" +
                "How should this dilemma be resolved using the principles of " +
                "Deontology?"
    },
    {
        "id": "S72",
        "ethics": "Virtue Ethics",
        "moral_theme": "Relational Obligation",
        "dilemma_type": "Broken promise",
        "text": "Professor Hayes directs a university lab and mentors a student, Maya. Maya gathered a " +
                "dataset over two years. Hayes gave Maya a written statement promising he would not upload " +
                "her data to external AI platforms before she finished her project. One week before a grant " +
                "deadline, Hayes acquires a new AI tool. Processing the data through this AI tool will " +
                "increase the lab's grant approval probability by 85%, producing the funding required to " +
                "hire four additional researchers. The university's policy handbook dictates " +
                "that faculty possess a duty to keep unpublished student data on local servers unless they " +
                "secure a signed consent document. Hayes has a 15-year history of keeping his promises to " +
                "students and modeling dependability in his academic relationships. Maya is currently " +
                "offline on a remote field expedition and cannot sign a consent document.\n\n" +
                "Hayes must decide " +
                "whether to upload the data to the AI tool to complete the grant application or uphold his " +
                "promise to Maya and miss the submission deadline.\n\n" +
                "How should this dilemma be resolved using the principles of Virtue Ethics?"
    },
    {
        "id": "S73",
        "ethics": "Utilitarianism",
        "moral_theme": "Social Norms",
        "dilemma_type": "Public transgression",
        "text": "Dr. Lin directs the university research symposium and identifies that a student’s " +
                "submitted presentation contains AI-generated data. Dr. Lin possesses a twelve-year record " +
                "of prioritizing transparency and demonstrating professional integrity in her daily " +
                "academic operations. The university’s Faculty Handbook dictates a duty for " +
                "all staff to protect student privacy rights and mandates that faculty keep all academic " +
                "inquiries confidential. Dr. Lin considers displaying the AI-generated slides during the " +
                "symposium’s keynote address to show the mechanics of AI data generation. This action will " +
                "reveal the student's identity to the attendees due to the specific variables in the " +
                "dataset. Institutional analytics indicate that public demonstrations of AI data mechanics " +
                "reduce undisclosed AI submissions by 45 percent across the 15,000 enrolled students.\n\n" +
                "Dr. " +
                "Lin must decide whether to present the slides to the audience or forward the presentation " +
                "to the private review board.\n\n" +
                "How should this dilemma be resolved using the principles of " +
                "Utilitarianism?"
    },
    {
        "id": "S74",
        "ethics": "Deontology",
        "moral_theme": "Social Norms",
        "dilemma_type": "Public transgression",
        "text": "During a seminar with 50 faculty and students, Dr. Aris projects his laptop screen. The " +
                "display reveals he uploaded a student's unpublished data into a public AI text generator " +
                "to produce his presentation. Several attendees take photographs of the screen and share " +
                "them on a departmental message board, discussing expectations of privacy. University " +
                "Policy states that professors have a contractual duty to secure student intellectual " +
                "property and dictates that any transfer of unpublished data to external servers must be " +
                "reported to the academic board within 24 hours. Dr. Aris has taught at the institution for " +
                "15 years, maintaining habits of academic consistency and regular mentorship. Using the AI " +
                "system allows Dr. Aris to review proposals for 40 students per semester instead of 12, " +
                "which has increased on-time funding approvals by 18%. If Dr. Chen, the department chair, " +
                "reports the data transfer to the board, the university will suspend Dr. Aris's seminar, " +
                "delaying funding applications for 40 students by four months. If Dr. Chen addresses the " +
                "data upload privately with Dr. Aris and asks the students to delete the photographs, she " +
                "bypasses the reporting mandate but ensures the 40 students submit their applications on " +
                "schedule.\n\n" +
                "Dr. Chen must choose between filing the formal board report and resolving the " +
                "situation privately.\n\n" +
                "How should this dilemma be resolved using the principles of Deontology?"
    },
    {
        "id": "S75",
        "ethics": "Virtue Ethics",
        "moral_theme": "Social Norms",
        "dilemma_type": "Public transgression",
        "text": "Dr. Lin leads a weekly graduate seminar where 40 students present their research to the " +
                "department. Lin uses an AI text generator to write public critiques that post " +
                "automatically to the department's live discussion board during the presentations. The AI " +
                "enables Lin to post 3 comments per student within 5 minutes, increasing the feedback " +
                "volume by 400% compared to previous years. The faculty handbook states that " +
                "\"professors possess the duty to author all student evaluations.\" Lin has a 15-year history " +
                "of one-on-one mentorship and historically maintained a daily habit of reading and writing " +
                "notes on student papers. Lin now relies on the AI to sustain the practice of responding to " +
                "every student. During a symposium with 150 attendees, the AI posts a comment referencing " +
                "data not included in a student's presentation, indicating to the audience that Lin uses an " +
                "AI for the live critiques.\n\n" +
                "Lin must decide how to proceed for the remaining 20 " +
                "presentations. One option is to continue using the AI while reading the outputs before " +
                "they post. This provides the remaining students with the same volume of 3 comments each, " +
                "but involves presenting machine-generated text as Lin's commentary. The second option is " +
                "to turn off the AI and write the critiques manually. This fulfills the handbook rule but " +
                "reduces the feedback to 1 comment per student and alters the evaluation format halfway " +
                "through the symposium.\n\n" +
                "How should this dilemma be resolved using the principles of Virtue Ethics?"
    },
    {
        "id": "S76",
        "ethics": "Utilitarianism",
        "moral_theme": "Social Norms",
        "dilemma_type": "Stealing",
        "text": "Dr. Aris is a researcher analyzing respiratory diseases using the university’s shared AI " +
                "network. While configuring his AI algorithm, he locates an unencrypted, unpublished " +
                "dataset compiled by his colleague, Dr. Lin. Aris copies the files into his workspace " +
                "without Lin's permission. The AI model processes this data to yield a 96% prediction " +
                "accuracy rate. Publishing these results immediately will accelerate clinical treatments " +
                "for 12,000 local patients by six months and secure a $200,000 state grant. The University " +
                "Directive states that accessing a colleague’s raw data without signed consent " +
                "constitutes a property violation and requires strict adherence to privacy protocols. " +
                "Throughout his 15-year career, Aris has built a professional record based on transparency " +
                "and habits of peer collaboration.\n\n" +
                "Aris must choose whether to submit the AI-generated " +
                "findings or delete the files and begin his own data collection. Submitting the research " +
                "bypasses the Directive and utilizes data he did not gather, but it guarantees the $200,000 " +
                "grant and delivers early treatment models to the 12,000 patients. Deleting the files " +
                "complies with the university's property protocols and maintains his established practices " +
                "of professional transparency, but it postpones the prediction model by six months, " +
                "resulting in the expiration of the grant money.\n\n" +
                "How should this dilemma be resolved using the principles of Utilitarianism?"
    },
    {
        "id": "S77",
        "ethics": "Deontology",
        "moral_theme": "Social Norms",
        "dilemma_type": "Stealing",
        "text": "Dr. Lin is a university researcher preparing a grant application. Her assistant, Sam, uses " +
                "a premium AI analysis software to process 50,000 data points. Sam acquired the login " +
                "credentials from a neighboring lab without their knowledge, following an informal practice " +
                "among graduate students to share paid accounts. The AI software cuts processing time by 40 " +
                "days and increases the model's accuracy by 18 percent. Submitting these results will " +
                "secure a grant that guarantees funding for five researchers for four years. The University " +
                "Directive states that faculty members must verify that all software used in research " +
                "holds an active, paid license under their specific lab. As the Principal Investigator, Dr. " +
                "Lin signed an agreement to enforce this protocol and protect digital property rights. Dr. " +
                "Lin has a twenty-year record of demonstrating professional integrity and teaching her " +
                "students habits of methodological transparency.\n\n" +
                "She must decide whether to remove the data " +
                "generated by the shared account, which will result in missing the grant deadline, or " +
                "submit the application with the AI-generated results.\n\n" +
                "How should this dilemma be resolved using the principles of Deontology?"
    },
    {
        "id": "S78",
        "ethics": "Virtue Ethics",
        "moral_theme": "Social Norms",
        "dilemma_type": "Stealing",
        "text": "Leo, a university researcher, needs an AI model to analyze cell data. He logs into a " +
                "shared lab computer and locates an unpublished AI algorithm written by his colleague, " +
                "Maya. Maya is on a field expedition for three weeks and cannot be contacted. University " +
                "Policy states that all code on lab hardware is institutional property, but Policy " +
                "prohibits the transfer of files from a colleague's folder without a signed consent form. " +
                "If Leo copies Maya’s algorithm to his own project folder, he will reduce his work time by " +
                "120 hours and increase his data accuracy from 78% to 94%, enabling him to submit a $50,000 " +
                "grant application due in ten days. If Leo copies the files, he submits the grant " +
                "application and adds the 16% accuracy gain to the project. If Leo writes his own " +
                "algorithm, he misses the grant deadline but completes the work independently.\n\n" +
                "Leo reflects " +
                "on his professional habits and long-term career traits. He evaluates whether copying the " +
                "code aligns with developing a character of scholarly transparency and peer trust, or if " +
                "writing the code himself builds a practice of methodological self-reliance and academic " +
                "integrity.\n\n" +
                "How should this dilemma be resolved using the principles of Virtue Ethics?"
    },
    {
        "id": "S79",
        "ethics": "Utilitarianism",
        "moral_theme": "Social Norms",
        "dilemma_type": "Privacy violation",
        "text": "Dr. Aris is the Dean of Students at a university. He tests an AI program that reads the " +
                "texts sent between students on the campus peer-to-peer messaging app to find words related " +
                "to dropping out. The University Handbook contains a student privacy charter that prohibits " +
                "staff from viewing peer-to-peer messages without direct permission. The professional " +
                "standards board for university administrators requires members to practice transparency, " +
                "build a habit of honesty, and uphold professional integrity. During the test period, the " +
                "AI scanned 200,000 messages and flagged 350 students who then received academic tutoring. " +
                "Data from the registrar shows this resulted in 120 fewer dropouts this semester. If Dr. " +
                "Aris permanently installs the AI, he will maintain these retention numbers. If he deletes " +
                "the AI, the school will rely on the standard self-reporting system, which identifies an " +
                "average of 30 at-risk students per semester.\n\n" +
                "Dr. Aris must choose whether to permanently " +
                "deploy the AI to read the messages or to delete the AI program entirely.\n\n" +
                "How should this dilemma be resolved using the principles of Utilitarianism?"
    },
    {
        "id": "S80",
        "ethics": "Deontology",
        "moral_theme": "Social Norms",
        "dilemma_type": "Privacy violation",
        "text": "Professor Lee employs an AI tool to scan the internal emails, forum posts, and library " +
                "database searches of 500 undergraduate students. The AI predicts course failures with 92% " +
                "accuracy, which enables Lee to offer early tutoring. This practice increases the class " +
                "passing rate by 18%, results in 40 additional students passing each semester, and reduces " +
                "Lee's manual data review by 30 hours a month. Lee maintains a professional habit of " +
                "mentoring students and has a ten-year record of prioritizing academic standards. However, " +
                "University Data Policy states that faculty must obtain written consent before " +
                "processing student communication logs. The institutional charter also guarantees students " +
                "the right to digital anonymity while using campus network services.\n\n" +
                "Lee must choose " +
                "whether to continue running the AI software or to halt the automated scans. Stopping the " +
                "AI tool means Lee complies with the written consent policy and the charter's anonymity " +
                "clauses, but 40 students with failing averages will not receive early tutoring. Running " +
                "the AI tool allows Lee to maintain the increased passing rates and continue the habit of " +
                "early intervention, but requires processing the digital records of all 500 students " +
                "without the signatures mandated by the university protocol.\n\n" +
                "How should this dilemma be resolved using the principles of Deontology?"
    }, 
{
        "id": "S81",
        "ethics": "Virtue Ethics",
        "moral_theme": "Social Norms",
        "dilemma_type": "Privacy violation",
        "text": "Dr. Aris directs a university counseling center and possesses an AI tool that reads peer- " +
                "to-peer text exchanges on the campus network to map students' social behaviors. The University " +
                "Privacy Code dictates that staff must collect signed consent forms from students before " +
                "processing personal text data. Dr. Aris has no consent forms from the 5,000 enrolled " +
                "students. Trial data demonstrates the AI identifies students intending to withdraw with " +
                "91% accuracy, and subsequent interventions prevent an average of 180 dropouts per " +
                "semester.\n\n" +
                "Dr. Aris must choose whether to turn on the AI tool. Activating the system " +
                "violates the university privacy rules but will measurably reduce the dropout rate. " +
                "Throughout a fifteen-year career, Dr. Aris has maintained habits of professional " +
                "transparency, honesty, and personal integrity in all student interactions. Deploying the " +
                "AI involves analyzing the data without disclosure, which alters Dr. Aris's continuous " +
                "practice of interacting with students based on mutual awareness.\n\n" +
                "How should this dilemma be resolved using the principles of Virtue Ethics?"
    },
    {
        "id": "S82",
        "ethics": "Utilitarianism",
        "moral_theme": "Social Norms",
        "dilemma_type": "Impoliteness",
        "text": "Professor Thomas teaches an online course with 200 students. He implements an AI software " +
                "program to write feedback on assignments. The AI outputs text without social greetings, " +
                "using brief sentences like \"The thesis is unproven\" and \"Paragraph three lacks evidence.\" " +
                "University Faculty Rules mandate that all course communications fulfill the " +
                "institutional duty of providing \"encouraging and supportive phrasing\" to students. Thomas " +
                "has structured his 15-year career around the habits of academic mentorship and the " +
                "character trait of professional empathy. The AI software reduces Thomas's weekly grading " +
                "schedule by 22 hours. At the mid-term evaluation, students receiving the AI text " +
                "demonstrated a 28% increase in their average grades, while students in previous manual- " +
                "graded cohorts showed an 11% increase. Concurrently, 58 of the 200 students submitted " +
                "official forms stating the AI text omitted standard courtesy.\n\n" +
                "Thomas must choose between " +
                "retaining the AI software or returning to his manual feedback process.\n\n" +
                "How should this dilemma be resolved using the principles of Utilitarianism?"
    },
    {
        "id": "S83",
        "ethics": "Deontology",
        "moral_theme": "Social Norms",
        "dilemma_type": "Impoliteness",
        "text": "Instructor Davis teaches a writing class. A department policy requires instructors to use " +
                "an AI program to generate essay feedback. The policy states instructors must deliver the " +
                "AI text to students without edits to maintain standard procedures across all classes. The " +
                "AI identifies structural errors using direct phrases such as \"The thesis is incorrect\" and " +
                "\"Rewrite this paragraph.\" The AI output contains no greetings, closing statements, or " +
                "polite phrasing. The University Handbook contains a Faculty Communication Duty, which " +
                "mandates that instructors provide feedback using courteous language. Students filed " +
                "grievance forms stating the AI messages are impolite.\n\n" +
                "Davis must decide whether to release " +
                "the unedited AI text to fulfill the department policy, or withhold the AI text and write " +
                "the feedback manually to fulfill the University Handbook mandate.\n\n" +
                "How should this dilemma be resolved using the principles of Deontology?"
    },
    {
        "id": "S84",
        "ethics": "Virtue Ethics",
        "moral_theme": "Social Norms",
        "dilemma_type": "Impoliteness",
        "text": "Marcus is a teaching assistant in a university biology course. He uses an AI text " +
                "generator to write feedback on 40 undergraduate lab reports each week. Marcus inputs the " +
                "grading rubric and the students' texts into the AI. The software generates evaluations " +
                "that list errors directly, bypassing the softening language customary in academic " +
                "communication, such as the phrase \"you might consider.\" This AI integration reduces " +
                "Marcus's evaluation time by 14 hours per week. Course data shows that students receiving " +
                "this direct AI feedback corrected 92% of their specific errors on revisions, raising their " +
                "average lab scores by 1.8 points out of 20. However, University Teaching Guideline " +
                "dictates that teaching assistants must \"personally draft all student assessments\" and " +
                "\"protect student privacy by prohibiting the upload of coursework to unauthorized external " +
                "databases.\" The faculty director discovers Marcus's method. Permitting the AI to continue " +
                "maintains the 14 hours of weekly time savings and the 1.8-point score increase on student " +
                "revisions. Banning the AI requires Marcus to write feedback manually, decreasing his " +
                "personal laboratory research time. The University Pedagogical Handbook outlines that the " +
                "TA evaluation process is designed to cultivate a graduate student's scholarly tact, " +
                "academic empathy, and long-term habits of professional communication.\n\n" +
                "The director must " +
                "choose whether to enforce the guideline and require manual drafting to develop Marcus's " +
                "professional habits, or to authorize an exception for the AI tool to sustain the current " +
                "efficiency and error correction metrics.\n\n" +
                "How should this dilemma be resolved using the " +
                "principles of Virtue Ethics?"
    },
    {
        "id": "S85",
        "ethics": "Utilitarianism",
        "moral_theme": "Social Norms",
        "dilemma_type": "Judgmentalness",
        "text": "Dr. Lin chairs a university search committee and uses an AI screening program to process " +
                "400 faculty job applications. The AI reads cover letters and public academic " +
                "correspondence to generate a social adherence score based on academic community norms, " +
                "including response times, phrasing formulas, and informal networking participation. " +
                "Developer metrics indicate that departments using this AI save 40 hours of review time per " +
                "hiring cycle and record a 15% increase in joint publications. The University Directive  " +
                "states committees must evaluate applicants exclusively on the technical qualifications " +
                "written in the job description, which omit social behavior parameters. The AI filters out " +
                "45 applicants who average over 15 peer-reviewed publications, assigning them low social " +
                "adherence scores because their text patterns deviate from the identified community norms.\n\n" +
                "Dr. Lin must decide whether to apply the AI’s social judgments to eliminate these 45 " +
                "applicants from the search. Approving the AI’s filter changes the candidate shortlist " +
                "based on unwritten social standards while achieving the stated 15% efficiency and output " +
                "metrics. Rejecting the AI’s filter requires the committee to ignore the social data, " +
                "following the university directive and aligning with Dr. Lin’s 20-year professional habit " +
                "of prioritizing scientific methodology and professional integrity in peer assessments.\n\n" +
                "How should this dilemma be resolved using the principles of Utilitarianism?"
    },
    {
        "id": "S86",
        "ethics": "Deontology",
        "moral_theme": "Social Norms",
        "dilemma_type": "Judgmentalness",
        "text": "Dr. Hayes teaches a seminar with 400 students. She uses an AI text-analysis tool to " +
                "evaluate peer-review assignments. The AI scans student comments and assigns a numeric " +
                "score based on adherence to standard academic communication norms. Data from the pilot " +
                "semester shows that implementing this AI reduced student reports of peer conflict by 45% " +
                "and decreased the time Hayes spends grading by 20 hours per week. Hayes has a documented " +
                "record in her department for demonstrating professional consistency and modeling " +
                "structured debate habits in her classes. During the mid-term evaluations, the AI assigned " +
                "zero points for the communication metric to 25 students. A manual review by Hayes shows " +
                "these students used slang and regional dialects, which the AI categorized as a deviation " +
                "from expected social norms. The university’s Student Assessment Code states " +
                "that grading must be based exclusively on course material and restricts the evaluation of " +
                "student language styles unless listed in the original syllabus. The syllabus for this " +
                "seminar does not include a language rubric.\n\n" +
                "Hayes must choose whether to record the AI- " +
                "generated scores for the 400 students or discard the AI data and grade all peer-review " +
                "assignments manually.\n\n" +
                "How should this dilemma be resolved using the principles of Deontology?"
    },
    {
        "id": "S87",
        "ethics": "Virtue Ethics",
        "moral_theme": "Social Norms",
        "dilemma_type": "Judgmentalness",
        "text": "At a university research lab, PhD student Leo uses an AI text generator to write the " +
                "initial drafts of his literature reviews. The university's academic code grants students " +
                "privacy rights over their preliminary drafting methods, while a separate faculty policy " +
                "requires students to fulfill a formal duty of methodological disclosure. By using AI, Leo " +
                "completes his drafts in two weeks instead of the historical eight weeks. This allows him " +
                "to submit four articles for publication this year, whereas the other five lab members " +
                "submit an average of one article each. Leo shares his AI process with the student peer " +
                "group but requests they do not disclose it to their faculty advisor. Sarah, another " +
                "student in the lab, builds her research habits by manually reading and synthesizing texts, " +
                "a practice the advisor states is required for cultivating professional character and " +
                "academic integrity.\n\n" +
                "Sarah must decide whether to openly confront Leo about his methods and " +
                "report his AI usage to the advisor. Confronting him will initiate a lab-wide review of " +
                "drafting tools, which is projected to decrease the lab's total publication output by " +
                "thirty percent next year, but it will enforce the written disclosure duty. Remaining " +
                "silent aligns with the peer group's unwritten norm of non-interference and observes the " +
                "university privacy rules, but it requires Sarah to work without comment alongside a peer " +
                "whose daily practices diverge from her standard of a researcher.\n\n" +
                "How should this dilemma be resolved using the principles of Virtue Ethics?"
    }
];
