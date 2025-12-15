
# **ATMA: Alzheimer's Triage and Monitoring Agent**


## **What ?**

The aim of the project is to develop a prototype improve Alzheimer's and Dementia patient care by implementing a multi-modal solution.

## **Why ?**

Research states that ~44% of the Alzheimer's and Dementia patient are prone to severe physical injury especially due to falling and fail to efficiently communicate.
Gemini 3 Pro provides transfer learning with few shot learning for developing a multimodal system for monitoring patients effectively. Eventhough there are wearable sensors the signals could be contextualized with images and audio data. This could provide faster decision making for administrating the right type of care procedure.

## **How ?**

A prototype was developed using [Google AI Studio](https://aistudio.google.com/apps) Vibe coding with [prompt](https://github.com/Xnsam/ATMA/blob/main/ai_studio_prompt.txt)

#### As Input it takes two sets of data.
- Baseline: The baseline images of the patient (probably lying on bed), audio recording and the wearable sensor data of the patient. It is used a reference of what looks like normal.
- Real time: The real time image, audio, sensor data indicating a fall / distress

#### As Output, it produces
- Levels of urgency - 1 / 2 / 3
- Recommended Action
- Reasoning and Evidence

#### It follows 3 scenarios
- Baseline: Everything that is normal
- Minimum Anomaly: Patient with slight distress
- Maximum Anomaly: Patient experienced fall


## **Impact**
- Improved Patient care targetted towards ~ 44 % of the cohort
- Cost reduction in developing ML system from data gathering, engineering to ml modelling for predictive modelling
- Extremely fast prototyping, business development, product ideation, pilot execution and product development.

## **Future Work**

I would like to extend this as a multi-agent framework using Google ADK + Antigravity to deploy the app in a production setting.


## **Notes**
- The image and sensor sample data was generated using [Nano Banana] (https://gemini.google/overview/image-generation/) and Gemini 3
- The audio sample was resourced from [this](https://www.kaggle.com/datasets/whats2000/human-screaming-detection-dataset) kaggle dataset
- [Video Link](https://www.youtube.com/watch?v=12u7EAVwhtc)
- [App Link](https://ai.studio/apps/drive/16bU1iLNSbAarjo4niCCpeGEjIDVNP4MV?fullscreenApplet=true)
- [Github](https://github.com/Xnsam/ATMA)
- [Test Data](https://github.com/Xnsam/ATMA/tree/main/data)
