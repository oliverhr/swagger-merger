/**
 * Created by WindomZ on 17-4-11.
 */
'use strict'

const fs = require('fs')

const test = require('ava')

const merger = require('../lib/merger')

test.serial('merger fail', async (t) => {
  await merger({
    input: ''
  }).then(() => {
    t.fail('should be catch error 1')
  }).catch(() => t.pass())

  await merger({
    input: './example/echo/index.xxx'
  }).then(() => {
    t.fail('should be catch error 2')
  }).catch(() => t.pass())
})

test('merger heroku-pets pass', async (t) => {
  await merger({
    input: './example/heroku-pets/index.yaml'
  }).then(() => {
    t.pass()
  }).catch(err => t.fail(err))

  await merger({
    input: './example/heroku-pets/index.json',
    output: './example/heroku-pets/swagger.json'
  }).then(() => {
    t.pass()
  }).catch(err => t.fail(err))

  await merger({
    input: './example/heroku-pets/index.yml'
  }).then(() => {
    t.pass()
  }).catch(err => t.fail(err))

  // whether the results are expected
  t.is('' + fs.readFileSync('./example/heroku-pets/swagger.json'),
    '' + fs.readFileSync('./example/heroku-pets/heroku-pets.json'))
})

test('merger echo pass', async (t) => {
  await merger({
    input: './example/echo/index.yaml'
  }).then(() => {
    t.pass()
  }).catch(err => t.fail(err))

  await merger({
    input: './example/echo/index.json',
    output: './example/echo/swagger.json'
  }).then(() => {
    t.pass()
  }).catch(err => t.fail(err))

  await merger({
    input: './example/echo/index.yml'
  }).then(() => {
    t.pass()
  }).catch(err => t.fail(err))

  // whether the results are expected
  t.is('' + fs.readFileSync('./example/echo/swagger.json'),
    '' + fs.readFileSync('./example/echo/echo.json'))
})

test('merger petstore_simple pass', async (t) => {
  await merger({
    input: './example/petstore_simple/index.yaml'
  }).then(() => {
    t.pass()
  }).catch(err => t.fail(err))

  await merger({
    input: './example/petstore_simple/index.json',
    output: './example/petstore_simple/swagger.json'
  }).then(() => {
    t.pass()
  }).catch(err => t.fail(err))

  await merger({
    input: './example/petstore_simple/index.yml'
  }).then(() => {
    t.pass()
  }).catch(err => t.fail(err))

  // whether the results are expected
  t.is('' + fs.readFileSync('./example/petstore_simple/swagger.json'),
    '' + fs.readFileSync('./example/petstore_simple/petstore_simple.json'))
})

test('merger petstore_domain pass', async (t) => {
  await merger({
    input: './example/petstore_domain/index.yaml'
  }).then(() => {
    t.pass()
  }).catch(err => t.fail(err))

  await merger({
    input: './example/petstore_domain/index.json',
    output: './example/petstore_domain/swagger.json'
  }).then(() => {
    t.pass()
  }).catch(err => t.fail(err))

  await merger({
    input: './example/petstore_domain/index.yml'
  }).then(() => {
    t.pass()
  }).catch(err => t.fail(err))

  // whether the results are expected
  t.is('' + fs.readFileSync('./example/petstore_domain/swagger.json'),
    '' + fs.readFileSync('./example/petstore_domain/petstore_simple.json'))
})
