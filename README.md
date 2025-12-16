
# **ATMA: Alzheimer's Triage and Monitoring Agent**

## Summary

- **Objective**: Developing a multimodal VLM solution for real-time patient distress monitoring, leveraging Small Visual Language Models (Small VLMs) and sensor data for rapid, contextual decision-making in a constrained setting.
- **Architecture & Deployment**: Designing a cost-effective, privacy-centric, on-premise deployment workflow using small, open-source VLMs and edge computing hardware (e.g., Raspberry Pi 5). The system is architected as a Mixture of Experts (MoE) model.
- **Current Phase**: Conducting comparative performance analysis of open-source Small VLMs (e.g., Moondream, PaliGemma, or Phi-3-Vision) to evaluate their feasibility as specialized "experts".
- **Technical Challenges** : Currently optimizing the MoE ensemble function to minimize 'Consensus Illusion', ensuring robust decision-making across visual, audio, and wearable sensor inputs.
- **Research Focus**: Exploring attention mechanism optimization and few-shot learning paradigms within the constrained environment to achieve acceptable performance (high Recall, balanced F1 score) while adhering to strict low-latency and data privacy policies. Designing evaluation benchmarks for consensus illusion and high-recall decision-making in under 5 seconds.
- **Data Strategy**: Implementing synthetic data generation pipelines (inspired by AlanaVLM) to standardize testing across candidate models.


## **What ?**

The aim of the project is to develop a prototype improve Alzheimer's and Dementia patient care by implementing a multi-modal solution with small Visual Language Models (VLMs).

- The prototype ( proof of concept ) that states the VLM is capable of addressing such a usecase is developed in Google AI Studio.
- The actual solution is currently under development on local machines with open source small VLMs (like [SmolVLM](https://arxiv.org/abs/2504.05299) )for cost-effective implementations with performance considerations.
- The solution is targeted to be deployed on-premise with edge computers ( like Raspberry Pi 5 ) with audio and video sensors for data inputs and processing.
- The data is not supposed to be stored / transferred anywhere and only used on-premise for critical decision making, adhering to strict patient data privacy policy.
- The research perspective is to improvise model performance ( possibly through attention mechanism optimization ) in constraint setting with few shot learning paradigm for acceptable level of performance. 


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

The project is deployed on premise, no data leaves the premise.

<img width="2700" height="1508" alt="image" src="https://github.com/user-attachments/assets/3c36f385-aba8-434b-8fe0-8fe77c4ee9dd" />

<h3> ToDo </h3>

LLM + ML
- [ ] Model selection for Mixture of Experts (MoE) - (gemma3: 4b, ?, ? )
- [ ] Optimization / Ensemble function to minimize Consensus illusion. refer: https://openreview.net/forum?id=saDOrrnNTz
- [ ] Hardware selection for deployment
- [ ] Prototype development and simulation
- [ ] Evaluation framework low TN, low TP, high recall, Precision and balanced F1 score

Andriod APP
- [ ] Develop an APP for Carers
- [ ] Dashboard APP for Admin at Care Home

Network Configuaration
- [ ] Network Security and Efficient Data transfer





## **Notes**

- The image and sensor sample data was generated using [Nano Banana] (https://gemini.google/overview/image-generation/) and Gemini 3
- The audio sample was resourced from [this](https://www.kaggle.com/datasets/whats2000/human-screaming-detection-dataset) kaggle dataset
- [Video Link](https://www.youtube.com/watch?v=12u7EAVwhtc)
- [App Link](https://ai.studio/apps/drive/16bU1iLNSbAarjo4niCCpeGEjIDVNP4MV?fullscreenApplet=true)
- [Github](https://github.com/Xnsam/ATMA)
- [Test Data](https://github.com/Xnsam/ATMA/tree/main/data)
