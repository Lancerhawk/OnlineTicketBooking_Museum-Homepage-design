<h1>CHATBOT For Museum Ticket Booking  
 <img src='Images/0.jpg' width=100 height=70></h1>

<h4>A CHAT BOT Built From Scratch</h4>

> Interactive Museum Reservation – Building a ChatBot for a museum ticket booking system. The bot maintains a conversation with the user regarding ticket booking, event reservations, general FAQs, etc.

> SPECIAL FEATURES INCLUDED FOR THIS BOT ARE:

  * SPEECH RECOGNITION
  * CUSTOMIZED THRESHOLD FOR RESPONSE ACCURACY
  * SENTIMENT ANALYSIS

<h2>Background and Significance of ChatBots in Museum Ticketing Systems</h2>

<hr />

* Chatbots are gradually becoming a part of various industries, simplifying everyday tasks and improving customer service. From ordering tickets to answering frequently asked questions, chatbots can make interactions more efficient.

* A chatbot is an artificial intelligence (AI) software that can simulate a conversation with users in natural language through messaging applications, websites, mobile apps, or through the telephone.

<img src='Images/museum_tickets.png'>

* Museums, particularly during busy times like weekends or special exhibitions, face challenges in managing large crowds and offering a seamless ticket booking experience. Manual ticketing systems can result in long queues and delays, which negatively impact visitor satisfaction.

* Introducing AI-powered chatbots into the museum system ensures faster ticketing, fewer errors, and an overall improved visitor experience. Not just for large museums, but institutions across the globe can benefit from AI adoption to enhance customer engagement and streamline operations.

<hr /> 

<h2>Implementation Framework</h2>
 
<p><b>SOFTWARE REQUIREMENTS</b></p>

 * TensorFlow Framework, NLTK Library.

<h2>Solution Approach</h2>

<img src='Images/Flow.png'>

* <b>Overview:</b> Using NLP to train the model, Speech Recognition for voice-based interaction. Sentiment analysis is applied to improve the chatbot's performance by analyzing user feedback and enhancing the experience.

<img src='Images/architecture.png'>

> The chatbot’s main function is to take input from users, process it through the model, match it with predefined intents and patterns, and return the appropriate response.

<img src='Images/main.jpg'>

* If the user chooses voice input, the speech-to-text function is activated, and the text is processed by the bot. Using the conversation, the Punkt Sentence Tokenizer divides text into sentences, and techniques like stemming and lemmatization generate the root form of words. This approach relies on basic NLP libraries, and intents are matched from scratch.

* After tokenization, words, classes, and documents are created, filtering out unnecessary symbols like question marks. The useful data is added to the corpus, and classes are generated. Duplicate words are removed, and intent classification helps in efficient query handling.

> Features are shuffled and converted to np.array. The neural network is built using the TENSORFLOW FRAMEWORK and trained using the Gradient Descent Algorithm.

* After training, a JSON file containing intents and responses is imported into the model. A data structure holds the user query, generates probability, and predicts the intent with relevant responses using techniques like TF-IDF and cosine similarity.

* User feedback is collected, and sentiment analysis is conducted to further improve the chatbot’s performance and ensure better user satisfaction.

<h2>Thank You :D</h2>
<p><i>I have used many online resources while creating this application, and I would like to thank them.</i> &nbsp; Hope you found this insightful. If you have any queries, you can reach me at: <b>your_email@example.com</b>. I would love to hear your feedback to improve it further!</p>
