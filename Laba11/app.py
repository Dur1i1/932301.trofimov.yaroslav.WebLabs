from flask import Flask, render_template
import random

app = Flask(__name__)

class CalcService:
    def __init__(self):
        self.first = random.randint(0, 10)
        self.second = random.randint(1, 10)
    
    def get_calculations(self):
        return {
            'add': self.first + self.second,
            'sub': self.first - self.second,
            'mult': self.first * self.second,
            'div': round(self.first / self.second, 2) if self.second != 0 else 'Error'
        }

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/model")
def model():
    service = CalcService()
    calculations = service.get_calculations()
    
    return render_template('model.html',
                         first=service.first,
                         second=service.second,
                         calculations=calculations)

@app.route("/viewdata")
def viewdata():
    service = CalcService()
    calculations = service.get_calculations()
    
    view_data = {
        'first': service.first,
        'second': service.second,
        'calculations': calculations
    }
    
    return render_template('viewdata.html', view_data=view_data)

@app.route("/viewbag")
def viewbag():
    service = CalcService()
    calculations = service.get_calculations()
    
    return render_template('viewbag.html',
                         first=service.first,
                         second=service.second,
                         add=calculations['add'],
                         sub=calculations['sub'],
                         mult=calculations['mult'],
                         div=calculations['div'])

@app.route("/serviceinjection")
def serviceinjection():
    service = CalcService()
    calculations = service.get_calculations()
    
    return render_template('serviceinjection.html',
                         service=service,
                         calculations=calculations)

if __name__ == "__main__":
    app.run(debug=True)