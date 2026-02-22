## Welcome To ( সহজ সরল সিম্পল ) Assignment - 4 


---
# 📅 Deadline For 60 marks: 23th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 50 marks: 24th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 30 marks: Any time after 24th February.


# Main Requirements

## Design Part

## Dashboard
- Website name and Create a dashboard like figma 
- The section should be responsive for mobile devices. It is totally up to you. 

## Available Jobs Section
- A title on the left side, jobs count on the right side 
- 3 different tab  below the section title 
- Minimum 8 cards with:
	- companyName
	- position
	- location
	- type
	- salary
	- description
	- 2 buttons: Interview, Rejected
- By default all the jobs data will show on All tab, and the Interview, Rejected tab will show “No jobs Available” message with a subtitle below and an icon/image on the above

- The section should be responsive for mobile devices. It is totally up to you.

--- 

## Functionalities Part
- Clicking on Interview button on the card 
    - will add the data on Interview tab 
    - add the status as Interview.
    - Will increase the the count of interview in Dashboard 

- Clicking on Rejected button on the card 
    - will add the data on Rejected tab 
    - add the status as Rejected.
    - Will increase the the count of Rejected in Dashboard

- Enable toggle between Interview and rejected button(you can select Rejected button after clicking on Interview, and Interview button after clicking on Rejected button). It will change the tab and dashboard count also. It will show tab wise jobs count on the right.

---

# Challenges Requirements
- Clicking on the delete button will remove that card from the UI, and the count will be deducted from the dashboard card and the main section.
- No lorem ipsum text on your website. At least 8 meaningful commits in your project.  

- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot. 


## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
	getElementById
	Returns: A single Element
	Selects By: ID only
	Speed: Fastest
	
	getElementsByClassName
	Returns: An HTMLCollection (live)
	Selects By: Class name only
	Speed: Fast
	
	querySelector
	Returns: The first matching Element
	Selects By: Any CSS Selector (.class, #id, div > p)
	Speed: Slower
	
	querySelectorAll
	Returns: A NodeList (static)
	Selects By: Any CSS Selector
	Speed: Slower
   
### 2. How do you create and insert a new element into the DOM?
	Create: const newDiv = document.createElement('div');
	Configure: newDiv.textContent = 'Hello World'; or newDiv.classList.add('active');
	Insert:
		parentElement.appendChild(newDiv) (Adds as the last child).
		parentElement.prepend(newDiv) (Adds as the first child).
		element.before() or element.after() (Adds as a sibling).

### 3. What is Event Bubbling? And how does it work?
	Event Bubbling is a way of event propagation where an event hits the innermost element
	first and then "bubbles up" through its ancestors in the DOM tree.
	How it works:
	If you click a <button> inside a <div>, the click event fires on the button first, then the <div>, 
	then the <body>, and finally the document. This is the default behavior for most events.

### 4. What is Event Delegation in JavaScript? Why is it useful?
	Event Delegation is a technique where you attach a single event listener to a parent element instead 
	of multiple listeners to every child.
	Why it’s useful:
		Memory Efficiency: One listener uses less memory than 100 listeners.
		Dynamic Elements: If you add a new child element via JavaScript later, the parent's listener will 
							automatically work for it.
	How it works: You use event.target inside the parent's listener to identify exactly which child was clicked.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
		event.preventDefault(): Stops the browser's default action.
						Example: Stops a link from opening a URL or a form from refreshing the page on submit.
		event.stopPropagation(): Stops the event from bubbling up.
						Example: If you click a "Delete" button inside a clickable card, you use stopPropagation() 
								to ensure the "Delete" action happens without also triggering the "Open Card" action.

---


**Technology Stack:**
- HTML
- CSS (Vanilla/Tailwind/DaisyUI)
- JavaScript (Vanilla)


--- 

## What to submit: 

1. GitHub Repository Link: 
2. Live Site Link: 
