from js import document
import random

log = document.getElementById("log")

events = [
    "You scrounge up enough change for a gas station coffee.",
    "You find a busted bicycle behind a Walmart. It's rideable... barely.",
    "A raccoon steals your trail mix.",
    "You land a one-day gig hauling pallets. Your knees are shot, but you made $40.",
    "You stare into the void. The void stares back.",
    "Dan texts: 'Still got that couch if you need it.'"
]

def update_log(text):
    log.innerText += f"\n\n{text}"
    log.scrollTop = log.scrollHeight  # auto-scroll down

def handle_action(evt):
    action = document.getElementById("command").value.strip()
    if not action:
        return
    update_log(f"> {action}")
    update_log(random.choice(events))
    document.getElementById("command").value = ""

def start_game():
    document.getElementById("do-action").addEventListener("click", handle_action)

start_game()
