# ShareIt

ShareIt is a simple file sharing application that allows users to share files between different devices on the same network. It compresses all files in the `static` folder into a single `.zip` file, and serves the compressed file via an HTTP server on port 3000 for clients to download.

## Prerequisites

- Node.js
- npm

## Installation

- Clone the repository:

```
git clone https://github.com/moein9gh/shareit.git
cd shareit
```

- Install the dependencies:

```
npm install
```

## Usage

- Place the files you want to share in the `files` folder.

- Start the server:

```
npm start
```


- The application will compress the files in the `files` folder into a single `output.zip` file and puts it in `static` folder and start the HTTP server on port 3000.

- A link will be displayed in the terminal. Share this link with other clients on the same network who want to download the files.

```
http://your_ip_address:3000/output.zip
```

- If you have any problem check displayed ip is correct or not.


- Clients can download the `output.zip` file by accessing the link in their web browser or using a terminal-based tool such as `wget` or `curl`.

- To send files from a mobile device to a laptop, install [Termux](https://termux.com/) on the mobile device, clone the repository, and run the project using the Node.js command.

## License

This project is licensed under the [MIT License](LICENSE).

