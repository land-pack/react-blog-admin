from flask import Flask, jsonify, request
from flask_restful  import Resource, Api, reqparse, abort
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

api = Api(app)

@app.route("/post", methods=["POST", "OPTIONS", "GET"])
def index():
    #       <TextField source="id" />
    #   <TextField source="title" />
    #   <DateField source="published_at" />
    #   <TextField source="average_note" />
    #   <TextField source="views" />
    data = {
        "id": 1,
        "title": "frank",
        "published_at": "2019-09-12",
        "average_note": "222",
        "views": 12
    }
    return jsonify(data)


class PostsApi(Resource):

    def get(self):
        data = {
            "id": 1,
            "title": "frank",
            "published_at": "2019-09-12",
            "average_note": "222",
            "views": 12
        }
        return [data,], {"X-Total-Count": 1 , 
            "Access-Control-Expose-Headers":"Content-Range",
            "Content-Range": "1",
            "Access-Control-Allow-Origin": "*"}

class PostApi(Resource):
    def get(self, id):
        data = {
            "id": 1,
            "title": "frank",
            "teaser": "123",
            "body": "hello jajajajaj",
            "published_at": "2019-09-12",
            "average_note": "222",
            "views": 12
        }
        return data, {"X-Total-Count": 1 , 
            "Access-Control-Expose-Headers":"Content-Range",
            "Content-Range": "1",
            "Access-Control-Allow-Origin": "*"}

    def post(self, id):
        data = {
            "id": 1,
            "title": "frank",
            "teaser": "123",
            "body": "hello jajajajaj",
            "published_at": "2019-09-12",
            "average_note": "222",
            "views": 12
        }
        return data, {"X-Total-Count": 1 , 
            "Access-Control-Expose-Headers":"Content-Range",
            "Content-Range": "1",
            "Access-Control-Allow-Origin": "*"}

    def put(self, id):
        print("update --> ", request.json)
        data = {
            "id": 1,
            "title": "frank",
            "teaser": "123",
            "body": "hello jajajajaj",
            "published_at": "2019-09-12",
            "average_note": "222",
            "views": 12
        }
        return data, {"X-Total-Count": 1 , 
            "Access-Control-Expose-Headers":"Content-Range",
            "Content-Range": "1",
            "Access-Control-Allow-Origin": "*"}

api.add_resource(PostsApi, '/posts')
api.add_resource(PostApi, '/posts/<id>')

if __name__ == '__main__':
    app.run(debug=True)