#!/usr/bin/python
from flask import \
    Flask, \
    render_template, \
    make_response, \
    request

import argparse
app = Flask(__name__, static_folder='assets', template_folder='tmpl')

def buildCSP():
    google = 'http://fonts.googleapis.com'
    gstatic = 'http://fonts.gstatic.com'
    self_tag = '\'self\''
    none_tag = '\'none\''
    unsafe_inline = '\'unsafe-inline\''
    unsafe_eval = '\'unsafe-eval\''
    default = 'default-src %s;' % (none_tag)
    script = 'script-src %s %s;' % (self_tag, unsafe_eval)
    font = 'font-src %s %s %s;' % (self_tag, google, gstatic)
    style = 'style-src %s %s;' % (self_tag, google)
    frame = 'frame-src %s;' % (none_tag)
    img = 'img-src %s data:;' % (self_tag)
    return default + script + font + style + frame  + img

@app.route('/', methods=['GET'])
def index():
    r = make_response(render_template('index.html'))
    csp = buildCSP()
    r.headers.set('Content-Security-Policy', csp)
    return r

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Flask Server')
    parser.add_argument('-p', '--port', help='Port', required=False, default=5080, type=int)
    parser.add_argument('-d', '--debug', help='debug mode', required=False, action='store_true')
    args = parser.parse_args()
    app.debug = args.debug
    app.run(host= '0.0.0.0',port=args.port,threaded=True)
