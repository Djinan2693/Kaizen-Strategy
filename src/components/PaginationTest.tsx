import React, { useState } from 'react';
import Pagination from './Pagination';

const PaginationTest = () => {
  const [currentPage, setCurrentPage] = useState(10); // Page 10 pour l'exemple
  const totalPages = 31; // 31 pages total pour l'exemple

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Test de Pagination - Kaizen Strategy
          </h1>
          
          {/* Informations sur l'état actuel */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-blue-900 mb-4">État actuel :</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-medium text-blue-800">Page courante :</span>
                <span className="ml-2 px-3 py-1 bg-red-700 text-white rounded-full">{currentPage}</span>
              </div>
              <div>
                <span className="font-medium text-blue-800">Total pages :</span>
                <span className="ml-2">{totalPages}</span>
              </div>
              <div>
                <span className="font-medium text-blue-800">Exemple attendu :</span>
                <span className="ml-2 text-xs">← 1 … 8 9 [10] 11 12 … 31 →</span>
              </div>
            </div>
          </div>

          {/* Contrôles de test */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contrôles de test :</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button
                onClick={() => setCurrentPage(1)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Page 1
              </button>
              <button
                onClick={() => setCurrentPage(5)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Page 5
              </button>
              <button
                onClick={() => setCurrentPage(15)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Page 15
              </button>
              <button
                onClick={() => setCurrentPage(31)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Page 31
              </button>
            </div>
          </div>

          {/* Instructions clavier */}
          <div className="bg-yellow-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-yellow-900 mb-4">Navigation clavier :</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-yellow-800">← →</span>
                <span className="ml-2 text-yellow-700">Précédent / Suivant</span>
              </div>
              <div>
                <span className="font-medium text-yellow-800">Home / End</span>
                <span className="ml-2 text-yellow-700">Première / Dernière page</span>
              </div>
            </div>
          </div>

          {/* Composant de pagination */}
          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
              Pagination Kaizen Strategy
            </h3>
            
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              className="mb-8"
            />
          </div>

          {/* Tests avec différents nombres de pages */}
          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Tests avec différents totaux :</h3>
            
            <div className="space-y-6">
              {/* Test avec 5 pages */}
              <div>
                <h4 className="text-md font-medium text-gray-700 mb-2">5 pages (toutes visibles) :</h4>
                <Pagination
                  totalPages={5}
                  currentPage={3}
                  onPageChange={() => {}}
                />
              </div>

              {/* Test avec 100 pages */}
              <div>
                <h4 className="text-md font-medium text-gray-700 mb-2">100 pages (page 50) :</h4>
                <Pagination
                  totalPages={100}
                  currentPage={50}
                  onPageChange={() => {}}
                />
              </div>

              {/* Test première page */}
              <div>
                <h4 className="text-md font-medium text-gray-700 mb-2">31 pages (première page) :</h4>
                <Pagination
                  totalPages={31}
                  currentPage={1}
                  onPageChange={() => {}}
                />
              </div>

              {/* Test dernière page */}
              <div>
                <h4 className="text-md font-medium text-gray-700 mb-2">31 pages (dernière page) :</h4>
                <Pagination
                  totalPages={31}
                  currentPage={31}
                  onPageChange={() => {}}
                />
              </div>
            </div>
          </div>

          {/* Note sur l'accessibilité */}
          <div className="bg-green-50 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-semibold text-green-900 mb-4">Fonctionnalités d'accessibilité :</h3>
            <ul className="text-sm text-green-800 space-y-2">
              <li>✅ <code>&lt;nav aria-label="Pagination"&gt;</code> pour la sémantique</li>
              <li>✅ <code>aria-current="page"</code> sur la page active</li>
              <li>✅ Focus ring visible (Essayez Tab)</li>
              <li>✅ Boutons tactiles ≥ 40px pour mobile</li>
              <li>✅ Navigation responsive (Desktop ↔ Mobile)</li>
              <li>✅ Contraste couleurs conforme AA</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginationTest;