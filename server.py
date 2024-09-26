from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import random
class CustomHandler(BaseHTTPRequestHandler):

    def do_GET(self):
        if self.path == '/api/data':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()


            words = ["apple", "stark", "click", "debug", "check"]

            # Select a random word from the array
            random_word = random.choice(words)


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
