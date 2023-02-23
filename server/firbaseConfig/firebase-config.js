import * as dotenv from 'dotenv'
dotenv.config()
import admin from 'firebase-admin'

admin.initializeApp({
  credential: admin.credential.cert({
    "type": process.env.type,
    "project_id": process.env.project_id,
    "private_key_id": process.env.private_key_id,
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCryQ80aVywaY2r\n/FaGZIne5WQPK7tTPCsCh7PQoQ6qaJIb4sQFHV2QgvJvCxciOtpMG5eXw2Fm/lQm\nqjj4c2uS2i0m8zC8UZpAjqdRVVzNzv52pDDpCQIZoyfsBy0uKWenHKZZgXwvRSNI\ngQsAjQRnkxrURI1lONBamIEA0JNUuU0ScpPHhnnKKSxOc22BJtfkiVvIuq55q+Wc\nJ00cF+1WvksAlFZNVUmMqBJDdWNtPicCG6doqtcVDsqqINVMzC32JKWyJ87tsEBx\nokVQIq1r4jlDK2FVkPQkY+gT64hJ/1/XAob7FMgFHnTN3gORMcn4ew9+Us2ht1tK\nMPAETn4/AgMBAAECggEAPkHiZEzRHlBK22ta0l8KhoEdN9BSFhLmxYZ32SMdpQ27\n8iZHg1EGsVJ72VmsGyg4KEARuxtAqCqBRfgIKKbv9CtlFMorPfzXChGJOxVUSnR7\nzXSpEzPEEpWKaOSa77Fq0uozsZmXb6w/Ys39tkflMkJihU6I7gfenw7JJgnxc1ES\nIOwIZwCTzmzpN3XDepMLhZIUw1r1jR9jPlfQt0CL7jAiNNeCEleOlC5tOCR/U7T2\nor1KeNF95MGW6/qCDFWOnDmtG+zeHQDUg4jl6wfjov/n1nUFqG4/WuZ+sCnDXsUg\nnjmuH2jDRH/bbAgpe+atd0mLzp9jCda1u1VIRLuF9QKBgQDmEnuApBmlAEhoytsc\nOSs8A6JeHG3X41oBIen0DkLypEzy9KOLJflG9//NwdHPAGMhQERYqOB2ZBWZt3hL\nqvGpldrWAZPREIqh38UTAsIPVdDG1MFggt7p07CIWDukHzNvRAJFTd0qkF6nLZVt\nOlb1aUaWdh7gfBfaRfzIA83TywKBgQC/JQTiNGVN/XtjIBnctej+aYVoAbiNRcTo\nqC/PSne35s7qpcKkV8NiolA0cM5vO4wYTe1NxGYNIrCPV9yUh+B3oLZbCRWGQkIr\nvVVweNkmKbuOhr38eXlX8bEezv3RWnVKAMpk0BSuSJK6t4KCbl8Jt9rmI3xlzqaK\nmmz5CRb43QKBgQCX1ezBugrelPA0kGPIHYaF5dQbDeIEDxvQEYSnt13BamMKGB9y\nbo4zoumj7dy8IwJI6HPymwj/uQ90UdvG/Drec3Jnt8TIvYTwTZBu+mv92OGexrwU\nKGpaoIUphileJ+U28ggZmshyFbMR24h4/H51GZQnKi84cU0AlR29Fp2YvwKBgCYj\n596PH+u4+abk3+Q3dB9XxOPk/ANMeacG8EtHi63pYz5VBwqt7HHA+4oLPFXbpu+u\nlPxghRB37I0dtgj5N+QG8HwnyuC4VeXOaL8BjircRu2Am2ZGgtz2gCYqnWDp0N+M\nWtZU4tuH5adWOLd3+ITC5+3mBMt3uamMeNQUaT4NAoGBAI0lWF1MTceWeM9Q3pLm\n75xvLduiL7s6GjAb39Ik2BKIwHohNqh+Pcut2E/k4/Tuk9cXZOKwchdVDEYQYjXB\n+IS/+HVB31EHTS7GL09vmduYkhGpXRazSSHWp1dMHUxZJH0rYkgucSguyKgBqOcB\n8U93Gz0tsjyau8ZJYKdY3BOv\n-----END PRIVATE KEY-----\n",
    "client_email": process.env.client_email,
    "client_id": process.env.client_id,
    "auth_uri": process.env.auth_uri,
    "token_uri": process.env.token_uri,
    "auth_provider_x509_cert_url": process.env.auth_provider_x509_cert_url,
    "client_x509_cert_url": process.env.client_x509_cert_url
  }
  )
});


export default admin