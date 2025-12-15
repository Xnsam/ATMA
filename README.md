
# **ATMA: Alzheimer's Triage and Monitoring Agent**


## **What ?**

The aim of the project is to develop a prototype improve Alzheimer's and Dementia patient care by implementing a multi-modal solution.

## **Why ?**

Research states that ~44% of the Alzheimer's and Dementia patient are prone to severe physical injury especially due to falling and fail to efficiently communicate.
Gemini 3 Pro provides transfer learning with few shot learning for developing a multimodal system for monitoring patients effectively. Eventhough there are wearable sensors the signals could be contextualized with images and audio data. This could provide faster decision making for administrating the right type of care procedure.

## **How ?**

A prototype was developed using [Google AI Studio](https://aistudio.google.com/apps) Vibe coding with [prompt](https://github.com/Xnsam/ATMA/blob/main/ai_studio_prompt.txt)

<h4>As Input it takes two sets of data</h4>

- Baseline: The baseline images of the patient (probably lying on bed), audio recording and the wearable sensor data of the patient. It is used a reference of what looks like normal.
- Real time: The real time image, audio, sensor data indicating a fall / distress

<h4> As Output, it produces </h4>

- Levels of urgency - 1 / 2 / 3
- Recommended Action
- Reasoning and Evidence

<h4> It follows 3 scenarios </h4>
- Baseline: Everything that is normal
- Minimum Anomaly: Patient with slight distress
- Maximum Anomaly: Patient experienced fall


<h2> Impact </h2>
- Improved Patient care targetted towards ~ 44 % of the cohort
- Cost reduction in developing ML system from data gathering, engineering to ml modelling for predictive modelling
- Extremely fast prototyping, business development, product ideation, pilot execution and product development.

## **Extension**

<h3> Deployment Workflow </h3>

<img width="2700" height="1508" alt="image" src="https://github.com/user-attachments/assets/3c36f385-aba8-434b-8fe0-8fe77c4ee9dd" />

<h3> ToDo </h3>

- [ ] Model selection for Mixture of Experts (MoE) - (gemma3: 4b, ?, ? )
- [ ] Optimization / Ensemble function to minimize Consensus illusion. refer: https://openreview.net/forum?id=saDOrrnNTz
- [ ] Hardware selection for deployment
- [ ] Prototype development and simulation
- [ ] Evaluation framework low TN, low TP, high recall, Precision and balanced F1 score






## **Notes**

- The image and sensor sample data was generated using [Nano Banana] (https://gemini.google/overview/image-generation/) and Gemini 3
- The audio sample was resourced from [this](https://www.kaggle.com/datasets/whats2000/human-screaming-detection-dataset) kaggle dataset
- [Video Link](https://www.youtube.com/watch?v=12u7EAVwhtc)
- [App Link](https://ai.studio/apps/drive/16bU1iLNSbAarjo4niCCpeGEjIDVNP4MV?fullscreenApplet=true)
- [Github](https://github.com/Xnsam/ATMA)
- [Test Data](https://github.com/Xnsam/ATMA/tree/main/data)
