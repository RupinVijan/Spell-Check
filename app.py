from flask import Flask,render_template,request
from textblob import TextBlob


app = Flask(__name__)

@app.route("/" ,methods=['GET', 'POST'])
def hello_world():
    if request.method=='POST':
        words=request.form.get("word")
        y=TextBlob(words)
        x=str(y.correct())
        return render_template("result.html",words=x)
    return render_template("index.html")

@app.route("/index" ,methods=['GET', 'POST'])
def index():
    if request.method=='POST':
        words=request.form.get("word")
        y=TextBlob(words)
        x=str(y.correct())
        return render_template("result.html",words=x)




if __name__=="__main__":
    app.run(debug=True)

