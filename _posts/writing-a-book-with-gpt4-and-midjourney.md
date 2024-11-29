---
title: 'Writing a book with GPT-4 and Midjourney'
excerpt: "A write-up on how I've created a children's book with GPT-4 and Midjourney and published it through Amazon KDP."
date: '2023-04-13'
---

### 🌱 The idea

With GPT-4 and AI being the flavour of the month, I always wanted to make use of it to aid me in building a pet project. Of course, the applications of GPT-4 are numerous, but this time I really wanted to push my limits and see how much it could aid me in building something that's not necessarily my area of expertise.

This motivation, coupled with my fascination for [Midjourney](https://www.midjourney.com/), sparked the idea of me writing a children's book.

After doing some initial research on Amazon, I decided on writing a children's book in rhyming verse about a friendly whale that goes on a journey to discover and learn about different emotions, such as happiness, sadness, fear, anger, disgust, and surprise.

If you are eager to see the end result, you can purchase the book on Amazon (both paperback and eBook/Kindle formats): [https://www.amazon.co.uk/Luna-journey-emotions-Nata-Pows/dp/B0C1JK6KH7](https://www.amazon.co.uk/Luna-journey-emotions-Nata-Pows/dp/B0C1JK6KH7).

---

### 📖 The process

#### GPT-4 prompts

To kickstart things, I needed a name for the main character - a perfect first task to fire up the GPT-4 prompt engineering engines.

🔍 **Finding a name for the main character**

```txt
----------
🔍 PROMPT:
----------

Generate 10 names for a whale character for a children's book for 3 to 8 years old.
Names should be unique and easy to remember.

----------
🖥️ GPT-4:
----------

Sure, here are 10 name ideas for a whale character for a children's book:

Finley
Pearl
Splash
Bubbles
Wally
Blue
Ocean
Nemo (not unique, but easily remembered)
Luna
Tide

I hope these name ideas are helpful! Let me know if you need any more suggestions.
```

Out of these suggestions, I went with "Luna" as the main character's name.

Next, I needed the story. And because we have this amazing tool called GPT-4, why not let it write the prompts for us? I used the following prompt to fine-tune my GPT-4 prompts going forward.

🔍 **Prompt engineering**

```txt
----------
🔍 PROMPT:
----------

I want you to become my prompt engineer. Your goal is to help me craft the best possible
prompt for my needs. This prompt will be used by you, ChatGPT. You will follow the
following processes.

1. Your first response will ask me what the prompt should be about.
I will provide my answer, but we will need to improve it through continual
iterations by going through the next steps.

2. Based on my input, you will generate 2 sections.
a) Revised prompt (provide your rewritten prompt. it should be clear, concise,
and easily understood by you),
b) Questions (ask any relevant questions pertaining to what additional information
is needed from me to improve the prompt).

3. We will continue this iterative process with me providing additional information
to you and you updating the prompt in the Revised prompt section until I say we are done.

----------
🖥️ GPT-4:
----------

Great, I would be happy to help you create the best possible prompt! So, let's get started:

1. What would you like the prompt to be about?"

----------
💬 MYSELF:
----------

Write me a children's book that rhymes about a whale named Luna that learns
about emotions.

----------
🖥️ GPT-4:
----------

Great prompt! Based on your input, here's what I came up with:

Revised Prompt:
Write a children's book in rhyming verse about a friendly whale named Luna who
discovers and learns to understand emotions.

Questions:

1. What age group is the book aimed at?
2. What kind of emotions would you like Luna to learn about?
3. Do you have a preferred tone for the book (e.g. light-hearted, educational,
inspiring, etc.)?
4. Would you like any specific lessons or messages to be conveyed through
the story?

----------
💬 MYSELF:
----------

1. From 3 to 8 years old
2. Happiness, sadness, fear, anger, disgust and surprise
3. Light-hearted, educational and inspiring
4. How to turn negative emotions into positives emotions and how to
embrace all emotions

----------
🖥️ GPT-4:
----------

Write a light-hearted, educational, and inspiring children's book in rhyming verse about
a friendly whale named Luna. Luna goes on a journey to discover and learn about different
emotions, such as happiness, sadness, fear, anger, disgust and empathy. Along the way,
Luna learns how to embrace and understand all emotions and how to turn negative emotions
into positive ones.

Questions:

1. Do you have a preference for the length of the book?
2. Would you like any other characters in the book besides Luna?
3. Do you have any particular settings or locations in mind for the story?
4. Is there a particular illustration style or aesthetic you have in mind for the book?
```

With this iterative process I went back and forth with GPT-4 until it managed to ask enough
questions to narrow down and fine-tune my prompt to perfection, which was eventually
fed back into GPT-4 to produce the copy for my book.

🔍 **Prompt for writing the book**

```txt
----------
🔍 PROMPT:
----------

Write a light-hearted, educational, and inspiring children's book in rhyming verse about
a friendly whale named Luna. Luna goes on a journey in the ocean to discover and learn
about different emotions, such as happiness, sadness, fear, anger, disgust and surprise.
Along the way, Luna learns how to embrace and understand all emotions and how to turn
negative emotions into positive ones. The book should be 10 to 15 pages in length and
should use simplified language. The title of the book is "Luna: A Journey of Emotions".

----------
🖥️ GPT-4:
----------

Title: Luna: A Journey of Emotions

Page 1:
In a wondrous ocean deep and wide,
Lived a friendly whale named Luna who loved the tide.
She swam with joy and a heart so kind,
Ready for a journey with much to find.

Page 2:
One sunny day, Luna felt quite bold,
Embarking on a quest to learn about feelings untold.
"I'll explore the sea and emotions deep,
To better understand and friendship keep."

Page 3:
First, she met a dolphin full of glee,
Jumping and laughing, as happy as can be.
"HAPPINESS," said Luna, "is shining so bright,
Like sunbeams dancing in the warm sunlight."

Page 4:
Next, she saw a seal feeling blue,
A tiny tear slid down as it withdrew.
"SADNESS," whispered Luna, "comes and goes,
Like clouds above us, it ebbs and flows."

Page 5:
A tiny fish then darted by,
Startled by a shadow from the sky.
"Ah, FEAR," said Luna, "like a stormy sea,
But when it passes, calm it will be."

Page 6:
A crab scuttled near, its claws held tight,
Pinching and snipping in a fit of spite.
"ANGER," sighed Luna, "can hurt and sting,
But if we learn to let go, love it will bring."

Page 7:
Luna met a jellyfish, its tentacles afloat,
Tasting something icky that had caught its throat.
"DISGUST," said Luna, "is a squirm and a scrunch,
But it helps us learn what not to munch."

Page 8:
Lastly, a seahorse appeared with a sudden start,
Surprised by Luna and making her heart dart.
"SURPRISE," Luna giggled, "can be fun or strange,
But it keeps life exciting and helps us change."

Page 9:
Luna swam back home, her journey complete,
Understanding emotions, both bitter and sweet.
"Now I know," she mused, "that feelings come and go,
And embracing them all is the way to grow."

Page 10:
So whenever you feel a little bit lost,
Remember dear Luna and the journey she crossed.
Embrace your feelings, the big and the small,
For understanding emotions connects us all.
```

Given how terrible I am with words - this blog being the living proof of this - I found the result that GPT-4 has generated absolutely fascinating. I was happy with this iteration so it was time to move ahead with the visuals.

#### Midjourney prompts

I will preface this section with the admission that this is the first time I interacted with Midjourney. While I have plenty of experience with everything Photoshop and Figma for the web, when it comes to artistic compositions, simply put and for lack of better words, I am inept.

That, however, didn't stop me from diving into the most interesting part of this pet project: the visuals. Remember the initial challenge: push the limits on how AI can help me enhance my skills to drive and deliver a pet project that's outside of my expertise.

For those unfamiliar with Midjourney:

Midjourney is an artificial intelligence program and service created and hosted by a San Francisco-based independent research lab Midjourney, Inc. Midjourney generates images from natural language descriptions, called "prompts", similar to OpenAI's DALL-E and Stable Diffusion. (_source: Wikipedia_)

For everything Midjourney, I've used only version v5. If you are unsure about some of the parameters used in my prompts, make sure to check out the [Midjourney Docs](https://docs.midjourney.com/docs/quick-start).

For starters, I needed a visual for my main character. I wasn't sure what I wanted, what style direction to use, etc., so I started with something basic.

```txt
----------
🔍 PROMPT:
----------

/imagine A playful blue whale character suitable for a children's book aimed at
3-8 year olds. The character should be depicted in an underwater scene. The
illustration should be fitting for a children's book and use bright,
cheerful colours. --v 5
```

![First variations of the main character](https://raw.githubusercontent.com/AdrianApan/personal-site/master/public/assets/blog/posts/gpt_midjourney_book_1.png)

While the results were definitely interesting and far beyond anything I could have ever produced, I wanted to see what other art styles I could create. I immediately went to the "Explore" section of the Midjourney website to see what was trending and the top images - why not get some inspiration from those who have already mastered this tool?

Browsing the top and trending images for a few minutes, I came across [this image](https://cdn.midjourney.com/b38e4652-e0af-4e3a-bff7-3694b9cfa090/0_3.png), which blew my mind and made me immediately fall in love with the art style and overall composition. I knew at this point that this was the art style I wanted in my book.

After consulting the Midjourney documentation, I came across what quickly became the breaking point in generating the visuals for the book:

```txt
/imagine <IMAGE_URL> prompt as usual
```

With this `<IMAGE_URL>` option, you can feed an image into your request, and your prompt will use that as the base image. I went back to Midjourney and fed it this prompt:

```txt
----------
🔍 PROMPT:
----------

/imagine <https://s.mj.run/1c5XBrr7-so> a playful blue whale character suitable for
a children's book aimed at 3-8 year olds. The character should embody curiosity and
wonder and be depicted in an underwater scene. --v 5
```

![Second variations of the main character](https://raw.githubusercontent.com/AdrianApan/personal-site/master/public/assets/blog/posts/gpt_midjourney_book_2.png)

This was it! The art style I aimed for! From here, I created several variations.

Sneak peek of some variations:

![Third variations of the main character](https://raw.githubusercontent.com/AdrianApan/personal-site/master/public/assets/blog/posts/gpt_midjourney_book_3.png)

After a few more variations, I ended up with something I liked and settled on - my book's main character!

![Main character](https://raw.githubusercontent.com/AdrianApan/personal-site/master/public/assets/blog/posts/gpt_midjourney_book_4.png)

From this point on, I needed a few more characters to match the storyline and emotions, such as a happy dolphin, a frightened fish, an angry crab, etc. The process was similar for all, as I already had a winning formula: use a base image, adjust the prompt to describe the emotions/expression I wanted the character to have, and create variations until it generates something I like and that fits.

```txt
----------
🔍 PROMPT:
----------

/imagine <BASE_IMAGE> a EMOTION_HERE ANIMAL_HERE character suitable for a
children's book aimed at 3-8 year olds. The character should embody
EMOTION_HERE and EMOTION_HERE and it should be depicted in an underwater
scene. --v 5
```

- **BASE_IMAGE**: either the [orignal art style image](https://cdn.midjourney.com/b38e4652-e0af-4e3a-bff7-3694b9cfa090/0_3.png) or my new [main character](https://media.discordapp.net/attachments/1093278982042034216/1093473584019677234/Hephe_a_playful_blue_whale_character_suitable_for_a_childrens_b_219ef48d-9bd0-4c59-80d8-8bee43dde043.png?width=1124&height=1124)

* **EMOTION**: the state/emotion of the character (example: sad, happy, scared, angry etc.)
* **ANIMAL**: animals/characters appearing in the book (dolphin, crab, fish, etc.)

🔍 **Example prompt for my seal character**

```txt
----------
🔍 PROMPT:
----------

/imagine <https://s.mj.run/d2rV0DybYs4> a sad seal character suitable for a
children's book aimed at 3-8 year olds. The character should embody sadness
and be tearful and it should be depicted in an underwater scene.
```

---

### 🛠️ Assembling

#### Sizing and page arrangement

The aim was to have a paperback version (8.5 x 8.5 inches), which I found to be the most common size for children's books. The images generated by Midjourney are squares as well (1024 x 1024 pixels), so this played into it nicely.

My goal was to have txt on the left page and the visual on the right page.

![Page arrangement](https://raw.githubusercontent.com/AdrianApan/personal-site/master/public/assets/blog/posts/gpt_midjourney_book_5.png)

To achieve this, I quickly cobbled together the pages in Figma, which took only a few minutes.

![Print version](https://raw.githubusercontent.com/AdrianApan/personal-site/master/public/assets/blog/posts/gpt_midjourney_book_6.gif)

As for the eBook/Kindle version, I merged the left and right pages, as these are presented (and best read) in landscape format.

![eBook version](https://raw.githubusercontent.com/AdrianApan/personal-site/master/public/assets/blog/posts/gpt_midjourney_book_7.png)

To achieve a consistent feeling, I didn't want to have just a simple solid colour on the left-hand side pages where the txts are placed. In my head, the pages should come together in one cohesive landscape image. To achieve an extended background which I could use as a background on the pages where the txt is placed, I opted for an age-old feature from Adobe Photoshop called "Content Aware Fill". You can read more about this PS feature here: [https://helpx.adobe.com/uk/photoshop/using/content-aware-fill.html](https://helpx.adobe.com/uk/photoshop/using/content-aware-fill.html)

With this powerful but straightforward feature, I was able to unify the left-hand side and right-hand side pages and also extend the cover page of the eBook version.

![Content Aware Fill 1](https://raw.githubusercontent.com/AdrianApan/personal-site/master/public/assets/blog/posts/gpt_midjourney_book_8.png)

![Content Aware Fill 2](https://raw.githubusercontent.com/AdrianApan/personal-site/master/public/assets/blog/posts/gpt_midjourney_book_9.png)

#### Publishing

I ended up publishing the book exclusively on Amazon using Amazon's KDP. It was the first time I had ever used KDP, and I must say, there is definitely room for improvement, but overall, it was a straightforward process for a complete beginner such as myself.

---

### 💬 Final thoughts

It took me two days from inception until publication to deliver this pet project and, while it definitely had its ups and downs, it was a refreshing break from my usual (mostly purely code-based) projects. I definitely enjoyed putting GPT-4 and Midjourney to work in a real-world project.

I used GPT-4 for other bits as well, such as filler copy in the book (outro, back of the book), proofreading, font suggestions and writing the product description on Amazon.

Finally, a parting fun fact: you might have noticed the author is "Nata Pows", which is an anagram for "Two Apans", crediting the two authors of the book: myself and my amazing wife who helped me along the way.

---

### 🔗 Useful links

- ["Luna: A Journey of Emotion" (eBook & paperback on Amazon)](https://www.amazon.co.uk/Luna-journey-emotions-Nata-Pows/dp/B0C1JK6KH7)
- [GPT-4](https://openai.com/product/gpt-4)
- [Midjourney](https://www.midjourney.com/)
- [Adobe Photoshop "Content Aware Fill"](https://helpx.adobe.com/uk/photoshop/using/content-aware-fill.html)
