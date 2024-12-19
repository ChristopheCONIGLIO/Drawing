/**
 * Ce script initialise les références et les contextes 2D pour deux éléments `<canvas>` :
 * 
 * Fonctionnalités :
 * - `drawingCanvas` : Un canvas dédié au dessin, manipulé via son contexte 2D.
 * - `imageCanvas` : Un canvas dédié à l'affichage d'images le css background est utilisé
 * 
 */

//ref to drawingCanvas
const canvasDrawing = document.getElementById('drawingCanvas');
const ctx = canvasDrawing.getContext('2d');
//ref to imageCanvas
const canvasImage = document.getElementById('imageCanvas');
const ctxImage = canvasImage.getContext('2d'); 