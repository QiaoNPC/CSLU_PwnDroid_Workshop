# PwnDroid: Introduction to Source Code Review & Dynamic Analysis

A practical workshop on analyzing Android applications through source code review and dynamic analysis using powerful tools and hooking techniques.

In this workshop, you'll learn:

- ✅ How to use `jadx-gui` for static analysis  
- ✅ How to hook Android functions and change their behavior  
- ✅ How to work with non-`MainActivity` components  
- ✅ How to bypass checks and extract flags dynamically  

---

## 🚀 Workshop Setup

Make sure you have the following installed and ready:

- Android Studio ✅  
- Android SDK (API 26) ✅  
- ADB ✅  
- Rooted Android Device ✅  
- Magisk + Frida ✅  
- `jadx-gui` ✅  
- Python requirements ✅

You can follow [CSLU installation Guide.pdf](CSLU%20Installation%20Guide.pdf) to install the tools required for the workshop.

Install Python requirements:
```bash
pip install -r requirements.txt
```

---

## 🧪 Tools Used

- **Android Studio** – for APK decompilation and debugging  
- **ADB** – to communicate with the Android device  
- **Frida** – for hooking functions at runtime  
- **Magisk** – to root the device and run Frida server  
- **jadx-gui** – for static analysis of APKs  

---

## 🧩 Labs

| Lab  | Topic                                               | Link             |
|------|-----------------------------------------------------|------------------|
| 0    | Introduction to Hooking & Changing Return Values    | [labs/lab0](labs/lab0) |
| 1    | Hooking Functions for Flag                          | [labs/lab1](labs/lab1) |
| 2    | Hooking Non-MainActivity Methods Flag               | [labs/lab2](labs/lab2) |
| 3    | Introduction to Hooking Non-MainActivity Variables  | [labs/lab3](labs/lab3) |
| 4    | Hooking Non-MainActivity Variables for Flag         | [labs/lab4](labs/lab4) |


## 🙏 Acknowledgements

This workshop includes a pre-rooted AVD setup based on the amazing work by:

- [newbit/rootAVD](https://gitlab.com/newbit/rootAVD)  
- [ViRb3/magisk-frida](https://github.com/ViRb3/magisk-frida)

Huge thanks to both projects for making Android security research more accessible.

---

Happy reversing! 🔍📱
