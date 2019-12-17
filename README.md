# Custom Natural Language

[![IBM Cloud Powered](https://img.shields.io/badge/IBM%20Cloud-powered-blue.svg)](https://cloud.ibm.com)
[![Platform](https://img.shields.io/badge/platform-golang-lightgrey.svg?style=flat)](https://developer.ibm.com/?s=golang/)

## Components and technologies

* [Cloud Foundry (Go Runtime)](https://cloud.ibm.com/cloudfoundry/overview): Cloud Foundry is an open-source platform as a service (PaaS) that provides you with a choice of clouds, developer frameworks, and application services.
* [Golang](https://golang.org): Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.
* [Knowledge Studio](https://cloud.ibm.com/catalog/services/knowledge-studio): Teach Watson the language of your domain with custom machine learning models that identify entities and relationships unique to your industry in unstructured text.
* [Natural Language Understanding](https://cloud.ibm.com/catalog/services/natural-language-understanding): Use advanced NLP to analyze text and extract meta-data from content such as concepts, entities, keywords, categories, sentiment, emotion, relations, and semantic roles.
* [React](https://reactjs.org): A declarative, efficient, and flexible JavaScript library for building user interfaces.

## Run locally

### Pre-work

You need to install [Node.js](https://nodejs.org), [React](https://reactjs.org) and [Golang](https://golang.org) before you run all commands below.

### Install Node.js and React dependencies

```sh
cd website
npm install
```

### Build the React app

```sh
npm run build
```

### Install Golang dependencies

```sh
cd ..
go mod download
go mod vendor
```

### Run Golang app

```sh
go run main.go
```

## LICENSE

Copyright 2019 Victor Shinya

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
