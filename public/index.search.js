var relearn_search_index = [
  {
    "breadcrumb": "",
    "content": "Introduction",
    "description": "Introduction",
    "tags": [],
    "title": "Getting Started",
    "uri": "/basics/index.html"
  },
  {
    "breadcrumb": "Getting Started",
    "content": "Buzz Words Galore When I am asked what OstrichDB is I have to recall back to an imaginary script that I keep stored in my mind. This script contains seemingly every buzzword one could use to descibe a crappy side project that they have been working on. Lets count the buzz words together. OstrichDB is a simple(0), lightweight(1), severless(2), document-based(3), JSON-esque(4), NoSQL(5), database system that is designed to be for on local machines for small projects. Thats it. That is the script. I have said it so many times that I can recite it in my sleep. But what does it all mean?\nSimple I designed OstrichDB for the purpose of creating an even easier alternative to SQLite. I was working on another side project called (Hallpass Hero)[https://github.com/SchoolyB/Hallpass-Hero]. This project used C++ to interact with a SQLite database. Generally speaking I felt like the C++ wrapper for SQLite was a bit too much for what I was trying to do and I wanted to create something that was easier to use. OstrichDB is designed to be easy to pickup, easy to use, and easy to understand. A user can perform basic CRUD operations by writing commands that look like plain english similar to how one would interact with a SQL database, but without the SQL.\nLightweight In its currents state the source code for OstrichDB is under 250kb with I can’t even tell you how many thousands of lines of code. The goal is to keep the codebase as small as possible while still providing the necessary functionality.\nServerless The current implementation of OstrichDB is a serverless architecture. This is subject to change in the future but for now the database is designed to be run on a local machine\nDocument-based Rather than storing data in tables like a traditional SQL database, OstrichDB stores data in documents called Collections. Collections themselves resemble JSON files. Speaking of JSON…\nJSON-esque Data is structured hierarchically in OstrichDB similar to how JSON is structured. Databases or Collections are made up of Clusters that are similar to JSON objects. Clusters are made up of related units of data called Records. Records resemble key-value pairs in JSON. There are several similarities between OstrichDB and other databases that uses JSON but there are also many key differences.\nNoSQL OstrichDB is a NoSQL database. The user can interact with data by entering commands from OstrichDB’s command line interface. These commands are similar to SQL commands but are indeed not SQL. Personally I feel that OstrichDB commands are constructed and executed in a more intuitive way than SQL commands.",
    "description": "Buzz Words Galore When I am asked what OstrichDB is I have to recall back to an imaginary script that I keep stored in my mind. This script contains seemingly every buzzword one could use to descibe a crappy side project that they have been working on. Lets count the buzz words together. OstrichDB is a simple(0), lightweight(1), severless(2), document-based(3), JSON-esque(4), NoSQL(5), database system that is designed to be for on local machines for small projects. Thats it. That is the script. I have said it so many times that I can recite it in my sleep. But what does it all mean?",
    "tags": [],
    "title": "Understanding OstrichDB",
    "uri": "/basics/understanding_ostrichdb/index.html"
  },
  {
    "breadcrumb": "Getting Started",
    "content": "Note: The following instructions assume the following:\nYou have Git installed on your machine. You are running a Linux-based operating system. You have the Odin programming language installed and built on your machine. You have Odin set in your PATH environment variable. To install OstrichDB run the following commands in your terminal:\nClone the repository: git clone https://github.com/Solitude-Software-Solutions/OstrichDB.git Change into OstrichDB’s src directory: cd your/path/to/OstrichDB/src Build and run OstrichDB: odin build main \u0026\u0026 ./main.bin",
    "description": "Note: The following instructions assume the following:\nYou have Git installed on your machine. You are running a Linux-based operating system. You have the Odin programming language installed and built on your machine. You have Odin set in your PATH environment variable. To install OstrichDB run the following commands in your terminal:\nClone the repository: git clone https://github.com/Solitude-Software-Solutions/OstrichDB.git",
    "tags": [],
    "title": "Installation",
    "uri": "/basics/installation/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
