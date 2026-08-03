<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sites_de_produtos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('usuario_id')->constrained('users')->onDelete('restrict');
            $table->string('nome');
            $table->string('slug')->unique();
            $table->string('url');
            $table->text('descricao')->nullable();
            $table->string('url_do_logo')->nullable();
            $table->boolean('verificado')->default(false);
            $table->string('situacao')->default('rascunho'); // rascunho, publicado, arquivado
            $table->timestamps();
            $table->softDeletes();

            $table->index('situacao');
            $table->fullText(['nome', 'descricao']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sites_de_produtos');
    }
};
