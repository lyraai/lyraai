from flask import Blueprint, jsonify, request
from .controllers import extract_youtube_id, download_audio_yt_dlp, youtube_process, rephrase_process, chat_process

main = Blueprint('main', __name__)


@main.route('/')
def hello_world():
    """
    A simple hello world message
    ---
    responses:
      200:
        description: A simple hello world message
        examples:
          application/json: { "message": "Hello, Lyra! Now we support CICD!" }
    """

    return jsonify(message='Hello, Lyra! Now we support CICD!')


@main.route('/extract_youtube_id', methods=['POST'])
def extract_id():
    """
    Extract YouTube ID
    ---
    parameters:
      - name: url
        in: body
        type: string
        required: true

    responses:
      200:
        description: YouTube video ID
        examples:
          application/json: { "video_id": "dQw4w9WgXcQ" }
    """

    url = request.json['url']
    video_id = extract_youtube_id(url)
    return jsonify(video_id=video_id)


# @main.route('/download_audio_pytube', methods=['POST'])
# def download_audio_pt():
#     """
#     (not stable) Download audio using pytube
#     ---
#     parameters:
#       - name: url
#         in: body
#         type: string
#         required: true
#       - name: audio_path
#         in: body
#         type: string
#         required: true
#
#     responses:
#       200:
#         description: Audio download status
#         examples:
#           application/json: { "message": "Audio downloaded with pytube" }
#     """
#
#     data = request.json
#     download_audio_pytube(data['url'], data['audio_path'])
#     return jsonify(message='Audio downloaded with pytube')


@main.route('/download_audio_yt_dlp', methods=['POST'])
def download_audio_yt_dlp():
    """
    Download audio using yt-dlp
    ---
    parameters:
      - name: url
        in: body
        type: string
        required: true
      - name: filename
        in: body
        type: string
        required: true
      - name: audio_type
        in: body
        type: string
        required: true

    responses:
      200:
        description: Audio download status
        examples:
          application/json: { "message": "Audio downloaded with yt-dlp" }
    """

    data = request.json
    download_audio_yt_dlp(data['url'], data['filename'], data['audio_type'])
    return jsonify(message='Audio downloaded with yt-dlp')


# @main.route('/transcribe', methods=['POST'])
# def transcribe_audio():
#     """
#     (no need to call) Request the transcript of the input audio
#     ---
#     parameters:
#       - name: openai_client
#         in: body
#         type: string
#         required: true
#       - name: audio_path
#         in: body
#         type: string
#         required: true
#
#     responses:
#       200:
#         description: Transcription result
#         examples:
#           application/json: { "result": "Transcription text" }
#     """
#
#     data = request.json
#     result = transcribe(data['openai_client'], data['audio_path'])
#     return jsonify(result=result)


@main.route('/youtube_process', methods=['POST'])
def youtube_process():
    """
    Main process for YouTube video analysis
    ---
    parameters:
      - name: url
        in: body
        type: string
        required: true
      - name: audio_dir
        in: body
        type: string
        required: true
      - name: audio_type
        in: body
        type: string
        required: true

    responses:
      200:
        description: YouTube video analysis results
        examples:
          application/json: { "results": {"transcript": "whole_transcript",
                                          "segments": [{"timestamp": "start_time",
                                                        "text": "transcript_segment",
                                                        "transcript": "whole_transcript",
                                                        "language": "used_language"},
                                                        {...},
                                                        ...],
                                          "language": "used_language",
                                          "summary": "generated_summary",
                                          "quiz": {"1": {"question": "question",
                                                         "options": ["option_1", "option_2", ...],
                                                         "answer": "option_1",},
                                                   "2": {...},
                                                   ...}
                                          "key_concepts": {"1": {"term": "key_concept",
                                                                 "definition": "explanation"},
                                                           "2": {...},
                                                           ...}
                                          "discussion": {"1": {"question": "question",
                                                               "answer": "answer"},
                                                         "2": {...},
                                                         ...}}}
    """

    data = request.json
    analysis_results = youtube_process(data['url'], data['audio_dir'], data['audio_type'])
    return jsonify(results=analysis_results)


@main.route('/rephrase_process', methods=['POST'])
def rephrase_process():
    """
    Start rephrase task
    ---
    parameters:
      - name: transcript
        in: body
        type: string
        required: true
      - name: sentence
        in: body
        type: string
        required: true
      - name: language
        in: body
        type: string
        required: true

    responses:
      200:
        description: Rephrased sentence
        examples:
          application/json: { "text": "rephrased_sentence" }
    """

    data = request.json
    rephrased_sentence = rephrase_process(data['transcript'], data['sentence'], data['language'])
    return jsonify(text=rephrased_sentence)


@main.route('/chat_process', methods=['POST'])
def chat_process():
    """
    Request the response to user's input
    ---
    parameters:
      - name: question
        in: body
        type: string
        required: true
      - name: transcript
        in: body
        type: string
        required: true
      - name: history
        in: body
        type: array
        required: true
      - name: language
        in: body
        type: string
        required: true

    responses:
      200:
        description: Response of the ChatBot
        examples:
          application/json: { "text": "response_sentence" }
    """

    data = request.json
    response = chat_process(data['question'], data['transcript'], data['history'], data['language'])
    return jsonify(text=response)
