# Paddy Plant Prognosis

**Paddy Plant Prognosis won Best Data Science Hack at [Hackrithmitic 2](https://hackrithmitic-2.devpost.com/project-gallery)

[Demo Link](https://www.paddyplantprognosis.tech/)

[Youtube Link](https://www.youtube.com/watch?v=M_xLQeglzgU)

[Kaggle Dataset used for Model](https://www.kaggle.com/competitions/paddy-disease-classification)

[Link to ML Model](https://github.com/IdkwhatImD0ing/PaddyPlantPrognosis/blob/main/modelv2.ipynb)


**Contributors:** [@IdkwhatImD0ing](https://github.com/IdkwhatImD0ing) [@simon-quach](https://github.com/simon-quach) [@triquenguyen](https://github.com/triquenguyen)

## Inspiration: 
Rice is a staple food for a large portion of the world's population, particularly in Asia where it is the primary source of nourishment for millions of people. As such, the cultivation of rice is of paramount importance for food security and economic stability in many countries. However, paddy cultivation, the raw grain before removal of husk, is a challenging task that requires consistent supervision due to the susceptibility of rice plants to various diseases and pests. These diseases can manifest in various ways, such as discoloration, wilting, and stunted growth, and can lead to significant yield loss if not identified and treated in a timely manner. The need for efficient and accurate disease identification in paddy cultivation inspired us to develop Paddy Plant Prognosis, an app that uses computer vision technology to automate this process and helps farmers to protect their crops and avoid potential loss.

## What it does
Our web app, Paddy Plant Prognosis, is a game changer for paddy cultivation. It utilizes cutting-edge computer vision technology to help farmers identify diseases in their crops quickly and accurately. With manual disease diagnosis often costly and time-consuming, our app offers a simple solution. By using our app, farmers can easily capture a picture of their plant and upload it to our system for instant analysis. The app then uses its advanced algorithms to identify any potential diseases, providing farmers with actionable information that they can use to protect their crops and avoid potential loss. With Paddy Plant Prognosis, farmers can catch diseases early, saving both time and money that would have been spent on costly treatments and labor. This app is a tool that can make a real difference in the livelihood of farmers, reducing crop loss and increasing yield.

## How we built it
Paddy Plant Prognosis was built using a combination of technologies to provide a seamless and efficient experience for farmers. The frontend of the app was built using Vite, a lightweight development server, and Tailwind CSS, a utility-first CSS framework, providing a sleek and intuitive interface. The backend was built using Flask, a Python web framework, allowing for efficient handling of data and communication between the frontend and the model. TensorFlow and Keras were used to train the model, providing it with the ability to accurately identify diseases in paddy crops. We used python libraries such as OpenCV for image processing and NumPy for numerical computations. The model was trained on a large dataset of images of rice plants and fine-tuned for optimal performance. Additionally, the app is optimized for mobile use, making it easy for farmers to use in their fields, using mobile device's camera for picture capturing, and easily accessible even in areas with limited internet connectivity. All these technologies were carefully selected and integrated to make sure that the app is user-friendly, efficient, and effective in identifying diseases in paddy crops.

## Challenges we ran into
Developing Paddy Plant Prognosis was not without its challenges. One of the main challenges we faced was using a new framework, Vite, for the frontend development. Vite is a relatively new framework and has limited resources and documentation compared to more established frameworks like React or Angular. This made it difficult for our team to quickly get up to speed and develop a functional frontend. Additionally, we also faced challenges while using Tailwind CSS, a new styling library. We had to spend a considerable amount of time understanding the library and how it works, as well as finding the appropriate components that matched our design requirements.

Another challenge we faced was the hardware limits when training models. Training models requires significant computational power and resources, and we faced limitations when running our models on our local machines.

Finally, we also faced challenges with Git collaboration and merge conflicts. With multiple team members working on different parts of the project, we often had to navigate merge conflicts and ensure that everyone's work was properly integrated into the main branch. This required careful coordination and communication among team members to ensure that the project was developed seamlessly.

## Accomplishments that we're proud of
We are proud of several accomplishments that we have achieved with Paddy Plant Prognosis:

 - Developing a web app that utilizes computer vision-based techniques to automate the process of disease identification in paddy crops, significantly improving the accuracy and speed of diagnosis.
 - Incorporating machine learning models that can accurately identify various diseases, pests, and other issues that can affect paddy crops.
 - Building a user-friendly and intuitive interface that allows farmers to easily upload pictures of their plants and receive quick and accurate diagnosis.
 - Optimizing the app for mobile use, making it accessible to farmers in remote areas with limited access to technology.
 - Utilizing a modern front-end framework, Vite, and a new styling library, Tailwind CSS, to create a visually appealing and responsive design.
 - Successfully addressing the challenges of manual disease identification in paddy cultivation and helping farmers to take timely action to protect their crops.

## What we learned
We have learned a lot during the development of Paddy Plant Prognosis. Some of the key things we have learned include:

 - The importance of computer vision and machine learning in automating disease identification in paddy crops.
 - The challenges of working with image data and the importance of data pre-processing and augmentation in order to improve the performance of machine learning models.
 - The importance of creating a user-friendly interface and easy-to-use application for farmers in remote areas.
 - The importance of collaboration and communication within a team in order to achieve a common goal.
 - Developing an understanding of how to work with large datasets and how to scale machine learning models.

## What's next for Paddy Plant Prognosis
Possible features we have thought about implementing:

 - Incorporating new machine learning models that can identify more types of diseases, pests, and other issues that can affect paddy crops, and expanding the app's capabilities to cover other crops besides paddy.
 - Enhancing the app's user interface and user experience to make it even more intuitive and user-friendly.
 - Integrating the app with other existing tools and systems that farmers use in their daily work, such as weather forecasting and pest management apps.
 - Providing farmers with relevant and actionable information in real-time, such as recommended treatment options and expected yield loss.
 - Scaling the app to handle high traffic and large numbers of users, and ensuring it can handle high-resolution images and videos.
