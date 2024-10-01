from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import random
class CustomHandler(BaseHTTPRequestHandler):

    def do_GET(self):
        if self.path == '/api/data':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()


            words = [{"sword":" pride of knight"},
{"chair":"use  in school by students to rest"},
{"error":"  404 not found"},
{"trade":" a form of exchange"},
{"Lunch":" A meal typically eaten during a school day."},
{"Study":" The act of learning or reviewing material."},
{"Drama":" A subject involving acting and theater arts."},
{"Alert":" Being aware and attentive in class."},
{"Watch":" To observe a presentation or demonstration."},
{"Group":" A collection of students working together."},
{"Learn":" The process of gaining knowledge or skills."},
{"Skill":" An ability acquired through practice or education."},
{"Music":" A subject taught in many schools; also involves instruments."},
{"Grade":" A score given for academic work."},
{"Logic":" A subject focusing on reasoning and critical thinking."},
{"Teach":" The act of imparting knowledge."},
{"Water":" A clear, colorless liquid essential for life."},
{"Money":" A medium of exchange for goods and services."},
{"Earth":" The planet we live on."},
{"Fruits":" Edible plant products, often sweet or sour."},
{"Story":" A narrative, either fictional or factual."},
{"Happy":" A feeling of joy or contentment."},
{"Storm":" A disturbance in the atmosphere with strong winds and rain."},
{"Watch":" To observe a presentation or demonstration."},
{"Group":" A collection of students working together."},
{"Brave":" Showing courage in the face of fear."},
{"Dress":" A garment worn by women and girls."},
{"Angle":" The figure formed by two rays meeting at a point"},
{"sword":" pride of knight"},
{"error":"  404 not found"},
{"trade":" a form of exchange."},
{"Lunch":" A meal typically eaten during a school day."},
{"Study":" The act of learning or reviewing material."},
{"Drama":" A subject involving acting and theater arts."},
{"Watch":" To observe a presentation or demonstration."},
{"Group":" A collection of students working together."},
{"Alert":" Being aware and attentive in class."},
{"Learn":" The process of gaining knowledge or skills."},
{"Skill":" An ability acquired through practice or education."},
{"Music":" A subject taught in many schools; also involves instruments."},
{"Grade":" A score given for academic work."},
{"Logic":" A subject focusing on reasoning and critical thinking."},
{"Teach":" The act of imparting knowledge."},
{"paris":" city of eiffel tower"}]

            # Select a random word from the array
            random_word = random.choice(words)

            print(f'word is {random_word}')
            response_data = {
                'message': 'Hello, World!',
                'data': random_word
            }
            

            self.wfile.write(json.dumps(response_data).encode('utf-8'))
        else:
            self.send_response(404)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(b"<html><body><h1>404 Not Found</h1></body></html>")

def run(server_class=HTTPServer, handler_class=CustomHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Serving on port {port}...')
    httpd.serve_forever()

if __name__ == "__main__":
    run()
