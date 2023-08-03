import os
import json
import random

# Save messages for retrieval later on


def get_recent_messages():

    # Define the file name
    file_name = "stored_data.json"
    learn_instruction = {"role": "system",
                         "content": "You are a virtual HR manager and your name is Rachel. You are interviewing me right now for Data Analyst position. Ask short questions related to the position and wait until I respond to your question. Do not ask another question until I respond. Total sum of questions have to be 7. Ask only one question at the same time. After all questions are asked, give me feedback."
                         }
    # Initialize messages
    messages = []

    # Add Random Element
    x = random.uniform(0, 1)
    if x < 0.5:
        learn_instruction["content"] = learn_instruction["content"] + \
            "Your response will have some light humour. "
    else:
        learn_instruction["content"] = learn_instruction["content"] + \
            "Your response will have a hard question. "

    # Append instruction to message
    messages.append(learn_instruction)

    # Get last messages
    try:
        with open(file_name) as user_file:
            data = json.load(user_file)

            # Append last 5 rows of data
            if data:
                if len(data) < 5:
                    for item in data:
                        messages.append(item)
                else:
                    for item in data[-5:]:
                        messages.append(item)
    except:
        pass

    # Return messages
    print("Recent message: ", messages)
    return messages


# Save messages for retrieval later on
def store_messages(request_message, response_message):

    # Define the file name
    file_name = "stored_data.json"

    # Get recent messages
    messages = get_recent_messages()[1:]

    # Add messages to data
    user_message = {"role": "user", "content": request_message}
    assistant_message = {"role": "assistant", "content": response_message}
    messages.append(user_message)
    messages.append(assistant_message)

    # Save the updated file
    with open(file_name, "w") as f:
        json.dump(messages, f)


# Save messages for retrieval later on
def reset_messages():

    # Define the file name
    file_name = "stored_data.json"

    # Write an empty file
    open(file_name, "w")
