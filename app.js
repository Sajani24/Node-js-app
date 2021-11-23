var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  function get_hit_count() {
    retries = 5;
    while(True)
        try:
            return cache.incr('hits')
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)
  }
  
  @app.route('/')

  function hello(){
    return "hello to my sample flask app, I have been seen"+ console.log.format(get_hit_count()) +"times\n"
  }
    
    
