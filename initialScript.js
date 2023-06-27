const mongoose = require('mongoose');
const Prompt = require('./models/Prompt'); // Assuming you have a Prompt model defined
require("dotenv").config({ path: "./config/.env" });

mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    
    // Define an array of prompts
    const prompts = [
      {
        content: 'What thoughts have been occupying your mind today?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'How would you describe your emotions right now?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What is one small thing you accomplished today and how did it make you feel?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What is one negative thought pattern you’ve noticed and how can you challenge it?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'How have you practiced self-care today?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What is one thing you appreciate about yourself?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What is one thing you wish you could change about your thinking patterns and how can you work towards that change?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What is one fear you have and what evidence do you have to support or challenge that fear?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What is one thing you’re grateful for today?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'When was the last time you felt happy and what caused that feeling?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What is one accomplishment you’re proud of in your life?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'How have you dealt with a difficult situation in the past and what strategies did you use?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What is one situation that made you feel anxious and how did you cope with it?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What is one value that is important to you and how do your actions reflect that value?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What is one negative belief you have about yourself and how can you challenge it?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What is one thing you did today that scared you, and how did you overcome that fear?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What is one thing you want to improve in your life and how can you work towards that improvement?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What is one thing that makes you feel calm or peaceful?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'In what ways do you tend to self-sabotage and how can you redirect that behavior?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What is one thing you appreciate about your relationships (romantic, platonic, or familial)?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What is one goal you have and what specific steps can you take to work towards achieving it?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What is one thing you enjoyed doing as a child and how can you incorporate that into your life now?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What is one negative thought you’ve had recently and what evidence do you have to support or challenge it?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What is one thing you’re looking forward to in the future?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What is one way you’ve grown or changed over the past few months or years?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'I am grateful for my family/friends/loved ones because...',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Describe a lesson you’re grateful to have learned.',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'List three things you used today that you are grateful for.',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Discuss three privileges you have that you are grateful for.',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Who was the last person who helped you? Describe how that made you feel.',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'List three accomplishments you’re proud of.',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What do you love most about your life?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Describe something unique about yourself that you’ve grown to appreciate.',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'I am grateful for all I have and all I am because...',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What do you want to be doing a year from now? Ten years from now?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Write about some things that you have found surprising in your life lately.',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Discuss someone you admire. Consider what similarities and differences you have compared to that person.',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Are there things in your life you need to let go of? What are they?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Transcribe your favorite quote or poem. What does it mean to you?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What things in life do you need to start saying no to?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'How do you define peace/love/success?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Recall a time when you mistreated another person. How does it make you feel? What have you learned from that experience?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What do you see as your most significant weaknesses? Consider where these qualities might stem from and how you can improve or accept them.',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Are you using emotional reasoning rather than logical reasoning? Try to consider whether your thought process is logical or based on emotion.',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Explore the evidence for and against a thought or belief.',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'How does accepting these thoughts and beliefs make you feel and behave?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What would you advise your best friend if they were thinking this way?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Is there some other thought or idea that would be more true to say? Why?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Consider and write about how you feel about your body.',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Write about the healthy habits you want to build.',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Focus on and listen to what your body is telling you. Write about this in your journal.',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'How do you recharge? Do you need to practice more rest and physical self-care?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'List your health goals and how you can focus on them over the next week or month.',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'How do you feel after a good night’s sleep versus a poor night’s sleep? How can you cultivate good sleep?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What small lifestyle change would have a positive impact on your health?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What can you do to prioritize your well-being?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Write about what you want to achieve over a certain time (this week, month, year, etc.) and why.',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What are your top priorities?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What motivates you?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Write about some lessons you learned recently that you want to keep in mind as you work toward your goals.',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What beliefs do you hold that limit you or hold you back?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'How can you step outside your comfort zone?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Consider how you spend your time. Could you be spending it more wisely or in a way that helps you achieve your goals?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What is one habit you want to break?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'What kind of person do you aspire to be?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Write a letter to the person other than yourself who was most affected by a traumatic event you experienced. Use this opportunity to tell them anything you have wanted to say; additionally, explain why you wanted to say it and why you feel the way you do. The letter is simply for your therapeutic use, not to send to the other person.',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Consider whether a traumatic event has had any positive effects on your life. Have you learned about yourself because of how this changed your life? If so, how?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Return to earlier entries and consider whether you could add any events or emotions that you now recall or that have since changed.',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Write about an important, but not significantly traumatizing, event in your life in great detail, including the setting and each of the people involved, down to their hair color and your attire.\n\nReflect upon what you learned from this event and whether writing about it changed your perspective of this event.',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Write about what makes you feel anxious. How can you redirect these anxious thoughts to make yourself feel calmer?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Write about the last time you were angry and what caused it. How can you use this anger to positively impact your life or the world?',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Consider the hardest or one of the hardest things you have gone through. Write about this event or period and reflect upon how you dealt with it.',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'I feel happy/sad/anxious when...',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'When I feel angry, I tend to...',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'My favorite things I do to calm myself are...',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'I feel ashamed/guilty about...',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'I would describe my relationship with my parent/friend/sibling as being...',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'A challenge I am trying to overcome right now is...',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Something I want to do for myself/my mental health today is...',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'Something I like about myself is...',
        likes: 0,
        created_at: new Date()
      },
      {
        content: 'The last time I cried was because...',
        likes: 0,
        created_at: new Date()
      }
    ];

    // Insert the prompts into the database
    Prompt.insertMany(prompts)
      .then(() => {
        console.log('Prompts inserted successfully');
        mongoose.connection.close(); // Close the MongoDB connection after insertion
      })
      .catch(error => {
        console.error('Error inserting prompts:', error);
        mongoose.connection.close();
      });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });
